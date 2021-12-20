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
exports.FurnitureAccessorySchema = void 0;
var baseField_1 = require("./baseField");
var mongoose_1 = require("mongoose");
var mongoose_2 = require("mongoose");
var function_1 = require("../../Utils/function");
var define_1 = require("../../Constant/define");
var FurnitureFields = __assign(__assign({}, baseField_1.AccessoryBaseField), { code: {
        type: Number,
        require: true
    } });
exports.FurnitureAccessorySchema = new mongoose_1.Schema(FurnitureFields, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });
exports["default"] = mongoose_2["default"].model(function_1["default"].getStoreSchema(define_1["default"].SCHEMA.ACCESSORY, define_1["default"].STORE.FURNITURE), exports.FurnitureAccessorySchema);
