"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./Menu.css");
var Menu = function (props) {
    var visibility = 'hide';
    if (props.menuVisibility)
        visibility = 'show';
    return (jsx_runtime_1.jsxs("div", __assign({ id: "flyoutMenu", onMouseDown: props.handleMouseDown, className: visibility }, { children: [jsx_runtime_1.jsx("h2", { children: jsx_runtime_1.jsx("a", __assign({ href: "#" }, { children: "Strona g\u0142\u00F3wna" }), void 0) }, void 0),
            jsx_runtime_1.jsx("h2", { children: jsx_runtime_1.jsx("a", __assign({ href: "#" }, { children: "O nas" }), void 0) }, void 0),
            jsx_runtime_1.jsx("h2", { children: jsx_runtime_1.jsx("a", __assign({ href: "#" }, { children: "Kontakt" }), void 0) }, void 0),
            jsx_runtime_1.jsx("h2", { children: jsx_runtime_1.jsx("a", __assign({ href: "#" }, { children: "Szukaj" }), void 0) }, void 0)] }), void 0));
};
exports["default"] = Menu;
