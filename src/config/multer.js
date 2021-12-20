"use strict";
exports.__esModule = true;
var multer_1 = require("multer");
var path_1 = require("path");
var storage = multer_1["default"].diskStorage({
    destination: function (req, file, cb) {
        cb(null, path_1["default"].join(__dirname, "..", "UploadFiles"));
    },
    filename: function (req, file, cb) {
        var uniqueSuffix = new Date().toISOString().replace(/:/g, '-') + file.originalname.includes("jfif") ? file.originalname.replace("jfif", "png") : file.originalname;
        cb(null, uniqueSuffix);
    }
});
var upload = (0, multer_1["default"])({ storage: storage });
exports["default"] = upload;
