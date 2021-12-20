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
exports.BillSchema = void 0;
var mongoose_1 = require("mongoose");
var define_1 = require("../../Constant/define");
var baseField_1 = require("./baseField");
var function_1 = require("../../Utils/function");
var furniture_1 = require("../Product/furniture");
var furniture_2 = require("../User/furniture");
var FurnitureBillField = __assign(__assign({}, baseField_1["default"]), { user: {
        type: furniture_2.UserSchema,
        require: true
    }, products: {
        type: [furniture_1.FurnitureProductSchema],
        require: true
    } });
exports.BillSchema = new mongoose_1.Schema(FurnitureBillField, {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});
var CategoryModel = (0, mongoose_1.model)(function_1["default"].getStoreSchema(define_1["default"].SCHEMA.BILL, define_1["default"].STORE.FURNITURE), exports.BillSchema);
exports["default"] = CategoryModel;
