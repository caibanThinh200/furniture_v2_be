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
exports.AAPetProductTypeSchema = void 0;
var mongoose_1 = require("mongoose");
var define_1 = require("../../Constant/define");
var function_1 = require("../../Utils/function");
var basefield_1 = require("./basefield");
var productType_middleware_1 = require("../../Middleware/productType.middleware");
var AAPetBaseField = __assign(__assign({}, basefield_1.ProductTypeBaseField), { attribute: {
        type: [mongoose_1.Schema.Types.ObjectId],
        ref: function_1["default"].getStoreSchema(define_1["default"].SCHEMA.ACCESSORY, define_1["default"].STORE.AA_PET)
    }, type: {
        type: Number,
        required: true,
        unique: true
    } });
exports.AAPetProductTypeSchema = new mongoose_1.Schema(AAPetBaseField, {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});
exports.AAPetProductTypeSchema.post("save", function (doc) {
    return (0, productType_middleware_1.AddTypeInAccessory)(doc, define_1["default"].STORE.AA_PET);
});
var AAPetProductTypeModel = (0, mongoose_1.model)(function_1["default"].getStoreSchema(define_1["default"].SCHEMA.PRODUCT_TYPE, define_1["default"].STORE.AA_PET), exports.AAPetProductTypeSchema);
exports["default"] = AAPetProductTypeModel;
