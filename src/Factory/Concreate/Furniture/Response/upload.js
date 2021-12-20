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
var UploadResponse_1 = require("../../../../Mapping/Response/UploadResponse");
var FurnitureResponse = /** @class */ (function (_super) {
    __extends(FurnitureResponse, _super);
    function FurnitureResponse(data) {
        var _this = _super.call(this, data) || this;
        _this.setFurnitureData(data);
        return _this;
    }
    FurnitureResponse.prototype.setFurnitureData = function (data) {
        this.setData(data);
        this.code = (data === null || data === void 0 ? void 0 : data.code) || "";
        this.image = (data === null || data === void 0 ? void 0 : data.image) || "";
    };
    return FurnitureResponse;
}(UploadResponse_1.UploadResponse));
exports["default"] = FurnitureResponse;
