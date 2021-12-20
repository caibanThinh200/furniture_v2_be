"use strict";
exports.__esModule = true;
exports.ProductTypeResponse = void 0;
var ProductTypeResponse = /** @class */ (function () {
    function ProductTypeResponse(data) {
        this.setData(data);
    }
    ProductTypeResponse.prototype.setData = function (data) {
        this._id = (data === null || data === void 0 ? void 0 : data._id.toString()) || "";
        this.name = (data === null || data === void 0 ? void 0 : data.name) || "";
        this.type = (data === null || data === void 0 ? void 0 : data.type) || 0;
        this.created_at = (data === null || data === void 0 ? void 0 : data.created_at) || null;
        this.updated_at = (data === null || data === void 0 ? void 0 : data.updated_at) || null;
    };
    return ProductTypeResponse;
}());
exports.ProductTypeResponse = ProductTypeResponse;
