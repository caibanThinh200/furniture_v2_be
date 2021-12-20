"use strict";
exports.__esModule = true;
exports.UploadResponse = void 0;
var UploadResponse = /** @class */ (function () {
    function UploadResponse(data) {
        this.setData(data);
    }
    UploadResponse.prototype.setData = function (data) {
        this._id = (data === null || data === void 0 ? void 0 : data._id.toString()) || "";
        this.url = (data === null || data === void 0 ? void 0 : data.url) || "";
        this.name = (data === null || data === void 0 ? void 0 : data.name) || "";
        this.role = (data === null || data === void 0 ? void 0 : data.role) || "";
        this.created_at = (data === null || data === void 0 ? void 0 : data.created_at) || null;
        this.updated_at = (data === null || data === void 0 ? void 0 : data.updated_at) || null;
    };
    return UploadResponse;
}());
exports.UploadResponse = UploadResponse;
