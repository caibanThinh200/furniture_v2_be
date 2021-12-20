"use strict";
exports.__esModule = true;
exports.AccessoryResponse = void 0;
var AccessoryResponse = /** @class */ (function () {
    function AccessoryResponse(data) {
        this.setData(data);
    }
    AccessoryResponse.prototype.setData = function (data) {
        this._id = (data === null || data === void 0 ? void 0 : data._id) || "";
        this.name = (data === null || data === void 0 ? void 0 : data.name) || "";
        this.types = (data === null || data === void 0 ? void 0 : data.types) || [];
        this.unit = (data === null || data === void 0 ? void 0 : data.unit) || "";
        this.created_at = (data === null || data === void 0 ? void 0 : data.created_at) || Date.now();
        this.updated_at = (data === null || data === void 0 ? void 0 : data.updated_at) || null;
    };
    return AccessoryResponse;
}());
exports.AccessoryResponse = AccessoryResponse;
