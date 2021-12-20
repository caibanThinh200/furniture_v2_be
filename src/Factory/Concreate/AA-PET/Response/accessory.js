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
var AccessoryResponse_1 = require("../../../../Mapping/Response/AccessoryResponse");
var AAPetTypeProductResponse = /** @class */ (function (_super) {
    __extends(AAPetTypeProductResponse, _super);
    function AAPetTypeProductResponse(data) {
        var _this = _super.call(this, data) || this;
        _this.setAAPetData(data);
        return _this;
    }
    AAPetTypeProductResponse.prototype.setAAPetData = function (data) {
        this.setData(data);
    };
    return AAPetTypeProductResponse;
}(AccessoryResponse_1.AccessoryResponse));
exports["default"] = AAPetTypeProductResponse;
