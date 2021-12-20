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
var ProductTypeResponse_1 = require("../../../../Mapping/Response/ProductTypeResponse");
var accessory_1 = require("./accessory");
var lodash_1 = require("lodash");
var FurnitureTypeProductResponse = /** @class */ (function (_super) {
    __extends(FurnitureTypeProductResponse, _super);
    function FurnitureTypeProductResponse(data) {
        var _this = _super.call(this, data) || this;
        _this.setFurnitureData(data);
        return _this;
    }
    FurnitureTypeProductResponse.prototype.setFurnitureData = function (data) {
        this.setData(data);
        this.attribute = (data === null || data === void 0 ? void 0 : data.attribute.map(function (item) { return (0, lodash_1.omit)(new accessory_1["default"](item)); }, ["types"])) || [];
    };
    return FurnitureTypeProductResponse;
}(ProductTypeResponse_1.ProductTypeResponse));
exports["default"] = FurnitureTypeProductResponse;
