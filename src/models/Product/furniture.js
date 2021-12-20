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
exports.FurnitureProductSchema = void 0;
var furniture_1 = require("../Upload/furniture");
var baseField_1 = require("./baseField");
var mongoose_1 = require("mongoose");
var define_1 = require("../../Constant/define");
var function_1 = require("../../Utils/function");
var FurnitureFields = __assign(__assign({}, baseField_1.ProductBaseField), { code: {
        type: Number,
        require: true
    }, type: {
        type: Number,
        "default": 0
    }, status: {
        type: String,
        "default": 0
    }, accessories: {}, 
    // categories: {
    //     type: [Schema.Types.ObjectId],
    //     default: [],
    //     ref: CommonFunction.getStoreSchema(TAG_DEFINE.SCHEMA.CATEGORY, TAG_DEFINE.STORE.FURNITURE)
    // },
    images: {
        type: [furniture_1.ImageSchema]
    } });
exports.FurnitureProductSchema = new mongoose_1.Schema(FurnitureFields, {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});
var FurnitureModel = (0, mongoose_1.model)(function_1["default"].getStoreSchema(define_1["default"].SCHEMA.PRODUCT, define_1["default"].STORE.FURNITURE), exports.FurnitureProductSchema);
exports["default"] = FurnitureModel;
