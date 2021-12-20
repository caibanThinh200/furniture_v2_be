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
exports.SocialMediaSchema = void 0;
var baseField_1 = require("./baseField");
var mongoose_1 = require("mongoose");
var function_1 = require("../../Utils/function");
var define_1 = require("../../Constant/define");
var FurnitureFields = __assign({}, baseField_1["default"]);
exports.SocialMediaSchema = new mongoose_1.Schema(FurnitureFields, {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});
var FurnitureSocailMediaModel = (0, mongoose_1.model)(function_1["default"].getStoreSchema(define_1["default"].SCHEMA.SOCIAL_MEDIA, define_1["default"].STORE.FURNITURE), exports.SocialMediaSchema);
exports["default"] = FurnitureSocailMediaModel;
