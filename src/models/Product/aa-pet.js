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
exports.ProductField = void 0;
var mongoose_1 = require("mongoose");
var define_1 = require("../../Constant/define");
var function_1 = require("../../Utils/function");
var baseField_1 = require("./baseField");
exports.ProductField = __assign(__assign({}, baseField_1.ProductBaseField), { category_detail_id: {
        type: String,
        required: true,
        ref: function_1["default"].getStoreSchema(define_1["default"].SCHEMA.CATEGORY_DETAIL, define_1["default"].STORE.AA_PET)
    }, images: {
        type: Array,
        "default": []
    } });
var ProductSchema = new mongoose_1["default"].Schema(exports.ProductField, {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});
var Product = mongoose_1["default"].model(function_1["default"].getStoreSchema(define_1["default"].SCHEMA.PRODUCT, define_1["default"].STORE.AA_PET), ProductSchema);
exports["default"] = Product;
