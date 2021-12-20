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
var AccessoryRequest_1 = require("../../../../Mapping/Request/AccessoryRequest");
var FurnitureAccessoryRequest = /** @class */ (function (_super) {
    __extends(FurnitureAccessoryRequest, _super);
    function FurnitureAccessoryRequest(data) {
        var _this = _super.call(this, data) || this;
        _this.setFurnitureData(data);
        return _this;
    }
    FurnitureAccessoryRequest.prototype.setFurnitureData = function (data) {
        this.setData(data);
        this.code = data.code || 0;
    };
    return FurnitureAccessoryRequest;
}(AccessoryRequest_1.AccessoryRequest));
exports["default"] = FurnitureAccessoryRequest;
