"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var e = RegExp.prototype.test.bind(/^(?:toString|valueOf)$/);
function UParamsConstor(n) {
    if (!(this instanceof UParams))
        return new UParams(n);
    n || (n = location.search + location.hash);
    var r = this;
    switch (typeof n) {
        case "object":
            for (var o in n)
                e(o) || (r[o] = n[o] + "");
            break;
        case "string":
            n.replace(/([^=?#&]*)=([^?#&]*)/g, function (_, n, o) {
                e(n) || (r[decodeURIComponent(n)] = decodeURIComponent(o));
            });
            break;
    }
    return r;
}
var UParams = /** @class */ (function () {
    function UParams(n) {
        return UParamsConstor.call(this, n);
    }
    UParams.prototype.toString = function () {
        var e = this;
        return Object.keys(e).map(function (t) {
            return encodeURIComponent(t) + "=" + encodeURIComponent(e[t]);
        }).join("&");
    };
    return UParams;
}());
exports.default = UParamsConstor;