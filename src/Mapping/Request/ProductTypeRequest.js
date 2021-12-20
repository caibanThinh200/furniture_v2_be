"use strict";
exports.__esModule = true;
exports.ProductTypeRequest = void 0;
var ProductTypeRequest = /** @class */ (function () {
    function ProductTypeRequest(data) {
        this.setData(data);
    }
    ProductTypeRequest.prototype.setData = function (data) {
        this.name = (data === null || data === void 0 ? void 0 : data.name) || "";
        this.type = (data === null || data === void 0 ? void 0 : data.type) || 0;
        this.created_at = (data === null || data === void 0 ? void 0 : data.created_at) || Date.now();
        this.updated_at = (data === null || data === void 0 ? void 0 : data.updated_at) || null;
    };
    return ProductTypeRequest;
}());
exports.ProductTypeRequest = ProductTypeRequest;
