import axios from "axios";

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  if (response.status === 401) {
    const returnUrl =
      window.location.pathname +
      (window.location.search || "") +
      (window.location.hash || "");

    const loginUrl = "/auth/login?redirect=" + encodeURIComponent(returnUrl);

    window.location.replace(loginUrl);

    throw Error("未登录");
  } else {
    
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

export default function request(url, options) {
  options = Object.assign(
    {
      method: "GET",
      validateStatus: status => {
        return (status >= 200 && status < 300) || status === 401;
      }
    },
    options
  );
  if (options.body) {
    if (typeof options.body === "string") {
      try {
        options.data = JSON.parse(options.body);
      } catch (e) {
        options.data = options.body;
      }
    } else {
      options.data = options.body;
    }
    delete options.body;
  }

  return axios({
    ...options,
    url: url
  })
    .catch(err => {
      console.info(222, err);
      throw err;
    })
    .then(checkStatus)
    .then(response => response.data)
}
