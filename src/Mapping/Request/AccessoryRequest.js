"use strict";
exports.__esModule = true;
exports.AccessoryRequest = void 0;
var AccessoryRequest = /** @class */ (function () {
    function AccessoryRequest(data) {
        this.setData(data);
    }
    AccessoryRequest.prototype.setData = function (data) {
        this.name = (data === null || data === void 0 ? void 0 : data.name) || "";
        this.type = (data === null || data === void 0 ? void 0 : data.type) || "";
        this.unit = (data === null || data === void 0 ? void 0 : data.unit) || "";
        this.types = (data === null || data === void 0 ? void 0 : data.types) || [];
        this.created_at = (data === null || data === void 0 ? void 0 : data.created_at) || Date.now();
        this.updated_at = (data === null || data === void 0 ? void 0 : data.updated_at) || null;
    };
    return AccessoryRequest;
}());
exports.AccessoryRequest = AccessoryRequest;
