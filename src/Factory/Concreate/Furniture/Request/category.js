"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var CategoryRequest_1 = require("../../../../Mapping/Request/CategoryRequest");
var mongoose_1 = require("mongoose");
var FurnitureRequest = /** @class */ (function (_super) {
    __extends(FurnitureRequest, _super);
    function FurnitureRequest(data) {
        var _this = _super.call(this, data) || this;
        _this.setFurnitureData(data);
        return _this;
    }
    FurnitureRequest.prototype.setFurnitureData = function (data) {
        this.setData(data);
        this._id = new mongoose_1["default"].Types.ObjectId();
        this.code = (data === null || data === void 0 ? void 0 : data.code) || "";
        this.products = this.generateCategoryProducts(data, []) || [];
        this.childCate = ((data === null || data === void 0 ? void 0 : data.childCate) || []).map(function (item) { return new FurnitureRequest(item); }) || [];
        this.image = (data === null || data === void 0 ? void 0 : data.image) || "";
    };
    FurnitureRequest.prototype.generateLeafCategoryProducts = function (products, arr) {
        var isLeaf = !!products;
        if (isLeaf) {
            products.length > 0 && products.map(function (id) { return arr.push({ _id: id }); });
        }
    };
    FurnitureRequest.prototype.generateCategoryProducts = function (category, arr) {
        var _this = this;
        if (arr === void 0) { arr = []; }
        if (category.childCate) {
            category.childCate.map(function (item) {
                _this.generateCategoryProducts(item, arr);
            });
        }
        else if (category.products) {
            this.generateLeafCategoryProducts(category.products, arr);
        }
        return arr;
    };
    return FurnitureRequest;
}(CategoryRequest_1["default"]));
exports["default"] = FurnitureRequest;
