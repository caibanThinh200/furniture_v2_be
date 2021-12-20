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
var BillRequest_1 = require("../../../../Mapping/Request/BillRequest");
var user_1 = require("./user");
var product_1 = require("./product");
var FurnitureRequest = /** @class */ (function (_super) {
    __extends(FurnitureRequest, _super);
    function FurnitureRequest(data) {
        var _this = _super.call(this, data) || this;
        _this.setFurnitureData(data);
        return _this;
    }
    FurnitureRequest.prototype.setFurnitureData = function (data) {
        this.setData(data);
        this.user = new user_1["default"]((data === null || data === void 0 ? void 0 : data.user) || {}) || "";
        this.products = (data === null || data === void 0 ? void 0 : data.products.map(function (item) { return new product_1["default"](item); })) || [];
    };
    return FurnitureRequest;
}(BillRequest_1["default"]));
exports["default"] = FurnitureRequest;
