"use strict";
exports.__esModule = true;
var ProductRequest = /** @class */ (function () {
    function ProductRequest(data) {
        this.setData(data);
    }
    ProductRequest.prototype.setData = function (data) {
        this.name = (data === null || data === void 0 ? void 0 : data.name) || "";
        this.description = (data === null || data === void 0 ? void 0 : data.description) || "";
        this.quantity = (data === null || data === void 0 ? void 0 : data.quantity) || 0;
        this.saled_count = (data === null || data === void 0 ? void 0 : data.saled_count) || 0;
        this.discount_value = (data === null || data === void 0 ? void 0 : data.discount_value) || 0;
        this.price = (data === null || data === void 0 ? void 0 : data.price) || 0;
        this.status = (data === null || data === void 0 ? void 0 : data.status) || 0;
        this.created_at = (data === null || data === void 0 ? void 0 : data.created_at) || Date.now();
        this.updated_at = (data === null || data === void 0 ? void 0 : data.updated_at) || null;
    };
    return ProductRequest;
}());
exports["default"] = ProductRequest;
