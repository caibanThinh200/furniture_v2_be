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
var BillResponse_1 = require("../../../../Mapping/Response/BillResponse");
var AAPetResponse = /** @class */ (function (_super) {
    __extends(AAPetResponse, _super);
    function AAPetResponse(data) {
        var _this = _super.call(this, data) || this;
        _this.setAAPetData(data);
        return _this;
    }
    AAPetResponse.prototype.setAAPetData = function (data) {
        this.setData(data);
        this.user_id = data === null || data === void 0 ? void 0 : data.user_id;
        this.products = data === null || data === void 0 ? void 0 : data.products;
    };
    return AAPetResponse;
}(BillResponse_1.BillResponse));
exports["default"] = AAPetResponse;
