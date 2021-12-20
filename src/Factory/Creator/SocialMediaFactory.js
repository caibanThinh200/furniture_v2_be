"use strict";
exports.__esModule = true;
exports.SocialMediaFactory = void 0;
var social_media_1 = require("../Concreate/Furniture/Response/social-media");
var social_media_2 = require("../Concreate/Furniture/Response/social-media");
var furniture_1 = require("../../models/SocialMedia/furniture");
// AA-store
var social_media_3 = require("../Concreate/AA-PET/Request/social-media");
var social_media_4 = require("../Concreate/AA-PET/Response/social-media");
var aa_pets_1 = require("../../models/SocialMedia/aa-pets");
var define_1 = require("../../Constant/define");
var SocialMediaFactory = /** @class */ (function () {
    function SocialMediaFactory() {
    }
    SocialMediaFactory.createSocialMedia = function (data, type) {
        switch (type) {
            case define_1["default"].STORE.FURNITURE:
                return new social_media_1["default"](data);
            case define_1["default"].STORE.AA_PET:
                return new social_media_3["default"](data);
            default:
                return new social_media_1["default"](data);
        }
    };
    SocialMediaFactory.getSocialMedia = function (data, type) {
        switch (type) {
            case define_1["default"].STORE.FURNITURE:
                return new social_media_2["default"](data);
            case define_1["default"].STORE.AA_PET:
                return new social_media_4["default"](data);
            default:
                return new social_media_2["default"](data);
        }
    };
    SocialMediaFactory.createSchema = function (data, type) {
        switch (type) {
            case define_1["default"].STORE.FURNITURE:
                return new furniture_1["default"](data);
            case define_1["default"].STORE.AA_PET:
                return new aa_pets_1["default"](data);
            default:
                return new furniture_1["default"](data);
        }
    };
    SocialMediaFactory.getSchema = function (type) {
        switch (type) {
            case define_1["default"].STORE.FURNITURE:
                return furniture_1["default"];
            case define_1["default"].STORE.AA_PET:
                return aa_pets_1["default"];
            default:
                return furniture_1["default"];
        }
    };
    return SocialMediaFactory;
}());
exports.SocialMediaFactory = SocialMediaFactory;
