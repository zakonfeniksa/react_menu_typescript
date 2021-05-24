"use strict";
exports.__esModule = true;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var MenuButton_js_1 = require("../MenuButton/MenuButton.js");
var Menu_js_1 = require("../Menu/Menu.js");
var MenuContainer = function () {
    var _a = react_1.useState(false), visible = _a[0], setVisible = _a[1];
    var toggleMenu = function () { return setVisible(!visible); };
    var handleMouseDown = function (e) {
        toggleMenu();
        e.stopPropagation();
    };
    return (jsx_runtime_1.jsxs(jsx_runtime_1.Fragment, { children: [jsx_runtime_1.jsx(MenuButton_js_1["default"], { handleMouseDown: handleMouseDown }, void 0),
            jsx_runtime_1.jsx(Menu_js_1["default"], { handleMouseDown: handleMouseDown, menuVisibility: visible }, void 0)] }, void 0));
};
exports["default"] = MenuContainer;
