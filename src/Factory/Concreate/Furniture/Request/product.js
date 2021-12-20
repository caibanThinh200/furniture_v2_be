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
var ProductRequest_1 = require("../../../../Mapping/Request/ProductRequest");
var upload_1 = require("./upload");
var FurnitureRequest = /** @class */ (function (_super) {
    __extends(FurnitureRequest, _super);
    function FurnitureRequest(data) {
        var _this = _super.call(this, data) || this;
        _this.setFurnitureData(data);
        return _this;
    }
    FurnitureRequest.prototype.setFurnitureData = function (data) {
        this.setData(data);
        this.code = (data === null || data === void 0 ? void 0 : data.code) || 0;
        this.isPercent = (data === null || data === void 0 ? void 0 : data.isPercent) || false;
        // this.accessories = new FurnitureAccessoryRequest(data?.accessory, data?.type);
        // this.size = data?.size || "";
        // this.productWeight = data?.productWeight || 0;
        // this.maxWeight = data?.maxWeight || 0;
        // this.feature = data?.feature || "";
        this.accessories = (data === null || data === void 0 ? void 0 : data.attribute) || {};
        this.images = ((data === null || data === void 0 ? void 0 : data.images) || []).map(function (item) { return new upload_1["default"](item); });
        this.categories = (data === null || data === void 0 ? void 0 : data.categories) || [];
    };
    return FurnitureRequest;
}(ProductRequest_1["default"]));
exports["default"] = FurnitureRequest;
