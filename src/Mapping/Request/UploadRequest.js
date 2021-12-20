"use strict";
exports.__esModule = true;
exports.UploadRequest = void 0;
var UploadRequest = /** @class */ (function () {
    function UploadRequest(data) {
        this.setData(data);
    }
    UploadRequest.prototype.setData = function (data) {
        this.url = (data === null || data === void 0 ? void 0 : data.originalname) || "";
        this.name = (data === null || data === void 0 ? void 0 : data.name) || "";
        this.role = (data === null || data === void 0 ? void 0 : data.role) || "";
        this.created_at = (data === null || data === void 0 ? void 0 : data.created_at) || Date.now();
        this.updated_at = (data === null || data === void 0 ? void 0 : data.updated_at) || null;
    };
    return UploadRequest;
}());
exports.UploadRequest = UploadRequest;
