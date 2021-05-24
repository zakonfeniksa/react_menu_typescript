"use strict";
exports.__esModule = true;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./MenuButton.css");
var MenuButton = function (_a) {
    var handleMouseDown = _a.handleMouseDown;
    return (jsx_runtime_1.jsx("button", { id: "roundButton", onMouseDown: handleMouseDown }, void 0));
};
exports["default"] = MenuButton;
