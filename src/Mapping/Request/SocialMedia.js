"use strict";
exports.__esModule = true;
exports.SocialMediaRequest = void 0;
var SocialMediaRequest = /** @class */ (function () {
    //
    function SocialMediaRequest(data) {
        this.setData(data);
    }
    SocialMediaRequest.prototype.setData = function (data) {
        this.name = (data === null || data === void 0 ? void 0 : data.name) || "";
        this.code = (data === null || data === void 0 ? void 0 : data.code) || "";
        this.thumb = (data === null || data === void 0 ? void 0 : data.thumb) || "";
        this.created_at = (data === null || data === void 0 ? void 0 : data.created_at) || Date.now();
        this.updated_at = (data === null || data === void 0 ? void 0 : data.updated_at) || null;
    };
    return SocialMediaRequest;
}());
exports.SocialMediaRequest = SocialMediaRequest;
