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
var baseField_1 = require("./baseField");
var mongoose_1 = require("mongoose");
var define_1 = require("../../Constant/define");
var function_1 = require("../../Utils/function");
var Product = {
    _id: false,
    product_id: {
        type: String,
        ref: function_1["default"].getStoreSchema(define_1["default"].SCHEMA.PRODUCT, define_1["default"].STORE.AA_PET)
    },
    count: {
        type: Number,
        "default": 1
    }
};
var schema = new mongoose_1["default"].Schema(__assign(__assign({}, baseField_1["default"]), { user_id: {
        type: String,
        ref: function_1["default"].getStoreSchema(define_1["default"].SCHEMA.USER, define_1["default"].STORE.AA_PET),
        required: true
    }, products: {
        type: [Product],
        required: true
    } }), { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } });
var Bill = mongoose_1["default"].model(function_1["default"].getStoreSchema(define_1["default"].SCHEMA.BILL, define_1["default"].STORE.AA_PET), schema);
exports["default"] = Bill;
