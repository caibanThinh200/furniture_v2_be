"use strict";
exports.__esModule = true;
exports.SocialMediaResponse = void 0;
var SocialMediaResponse = /** @class */ (function () {
    function SocialMediaResponse(data) {
        this.setData(data);
    }
    SocialMediaResponse.prototype.setData = function (data) {
        this._id = (data === null || data === void 0 ? void 0 : data._id) || "";
        this.name = (data === null || data === void 0 ? void 0 : data.name) || "";
        this.code = (data === null || data === void 0 ? void 0 : data.code) || "";
        this.thumb = (data === null || data === void 0 ? void 0 : data.thumb) || "";
        this.created_at = (data === null || data === void 0 ? void 0 : data.created_at) || Date.now();
        this.updated_at = (data === null || data === void 0 ? void 0 : data.updated_at) || null;
    };
    return SocialMediaResponse;
}());
exports.SocialMediaResponse = SocialMediaResponse;
