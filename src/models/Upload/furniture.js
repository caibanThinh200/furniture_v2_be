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
exports.ImageSchema = void 0;
var mongoose_1 = require("mongoose");
var define_1 = require("../../Constant/define");
var baseField_1 = require("./baseField");
var FurnitureImageField = __assign({}, baseField_1["default"]);
exports.ImageSchema = new mongoose_1.Schema(FurnitureImageField, {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});
var ImageModel = (0, mongoose_1.model)(define_1["default"].SCHEMA.IMAGE, exports.ImageSchema);
exports["default"] = ImageModel;
