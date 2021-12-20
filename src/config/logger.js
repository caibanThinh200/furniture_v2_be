"use strict";
exports.__esModule = true;
var winston_1 = require("winston");
var moment_1 = require("moment");
var colors_1 = require("colors");
colors_1["default"].enable();
var typeMessage = function (value) {
    switch (value.level) {
        case "error": return "Error";
        case "warn": return "Warning";
        default: return "Notification";
    }
};
var loggingMessage = function (value) {
    var colorMessage = colors_1["default"].black("(".concat(typeMessage(value), ") Message logged in ").concat((0, moment_1["default"])(value.timestamp).format("DD-MM-YYYY hh:mm:ss"), " \n- ").concat(value.message, " - "));
    if (value.level === "warn") {
        return colors_1["default"].bgYellow(colorMessage);
    }
    if (value.level === "error") {
        return colors_1["default"].bgRed(colorMessage);
    }
    else
        return colors_1["default"].bgGreen(colorMessage);
};
var logger = (0, winston_1.createLogger)({
    format: winston_1["default"].format.combine(winston_1["default"].format.printf(function (info) { return loggingMessage(info); })),
    transports: [
        new winston_1.transports.Console()
    ]
});
exports["default"] = logger;
