function Toast(msg,time){
    var body = document.body;
    var wrap = document.createElement("div");
    wrap.style.width = "100%";
    wrap.style.display = "flex";
    wrap.style.justifyContent = "center";
    wrap.style.position = "fixed";
    wrap.style.top = "25%";
    var  node=  document.createElement("span");
    node.innerText = msg;
    node.style.color = "#fff";
    node.style.padding = "10px 20px";
    node.style.background = "#000000cc";
    node.style.zIndex = "10000";
    node.style.fontSize = "24px";
    node.style.borderRadius = "5px";
    node.className = "yg-toast";
    wrap.appendChild(node)
    body.appendChild(wrap);
    if(!time){
        time = 1;
    }
    setTimeout(function(){
        wrap.remove();
    },time * 1000)

}
export default Toast;