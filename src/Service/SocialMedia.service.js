"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var logger_1 = require("../Config/logger");
var define_1 = require("../Constant/define");
var function_1 = require("../Utils/function");
var SocialMediaFactory_1 = require("../Factory/Creator/SocialMediaFactory");
var SocialMediaService = /** @class */ (function () {
    function SocialMediaService() {
    }
    SocialMediaService.AddSocialMediaService = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var socialMediaFactory, socialMedia, result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        socialMediaFactory = SocialMediaFactory_1.SocialMediaFactory.createSocialMedia(req.body, req.headers['type']);
                        socialMedia = SocialMediaFactory_1.SocialMediaFactory.createSchema(socialMediaFactory, req.headers['type']);
                        return [4 /*yield*/, socialMedia.save()
                                .then(function () { return function_1["default"].getActionResult(null, 201, null, define_1["default"].RESULT.SOCIAL_MEDIA.create); })["catch"](function (e) {
                                logger_1["default"].error(e);
                                return function_1["default"].getActionResult(null, 403, e, define_1["default"].RESULT.SOCIAL_MEDIA.create);
                            })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 2:
                        e_1 = _a.sent();
                        logger_1["default"].error(e_1);
                        return [2 /*return*/, function_1["default"].getActionResult(null, 400, e_1, define_1["default"].RESULT.SOCIAL_MEDIA.create)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SocialMediaService.GetListSocialMediaService = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var type_1, socialMedia, socialMediaFactory, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        type_1 = req.headers['type'];
                        return [4 /*yield*/, SocialMediaFactory_1.SocialMediaFactory.getSchema(type_1).find({ type: type_1 })];
                    case 1:
                        socialMedia = _a.sent();
                        socialMediaFactory = socialMedia.map(function (item) { return SocialMediaFactory_1.SocialMediaFactory.getSocialMedia(item, type_1); });
                        return [2 /*return*/, function_1["default"].getActionResult(socialMediaFactory, 200, null)];
                    case 2:
                        e_2 = _a.sent();
                        logger_1["default"].error(e_2);
                        return [2 /*return*/, function_1["default"].getActionResult(null, 400, e_2, define_1["default"].RESULT.SOCIAL_MEDIA.getList)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SocialMediaService.GetDetailSocialMediaService = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var type_2, id, socialMedia, socialMediaFactory, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        type_2 = req.headers['type'];
                        id = (req.params || "").id;
                        return [4 /*yield*/, SocialMediaFactory_1.SocialMediaFactory.getSchema(type_2).find({
                                type: type_2,
                                _id: id
                            })];
                    case 1:
                        socialMedia = _a.sent();
                        socialMediaFactory = socialMedia.map(function (item) { return SocialMediaFactory_1.SocialMediaFactory.getSocialMedia(item, type_2); });
                        return [2 /*return*/, function_1["default"].getActionResult(socialMediaFactory, 200, null)];
                    case 2:
                        e_3 = _a.sent();
                        logger_1["default"].error(e_3);
                        return [2 /*return*/, function_1["default"].getActionResult(null, 400, e_3, define_1["default"].RESULT.SOCIAL_MEDIA.getDetail)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SocialMediaService.UpdateSocialMediaService = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var type, id, currentSocialMedia, filters, newRequest, updateSocialMedia, updateResult, e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        type = req.headers['type'];
                        id = (req.params || "").id;
                        return [4 /*yield*/, this.GetDetailSocialMediaService(req)];
                    case 1:
                        currentSocialMedia = _a.sent();
                        filters = currentSocialMedia[0] || {};
                        newRequest = __assign(__assign({}, currentSocialMedia[0]), req.body);
                        updateSocialMedia = SocialMediaFactory_1.SocialMediaFactory.createSocialMedia(newRequest, req.query);
                        return [4 /*yield*/, SocialMediaFactory_1.SocialMediaFactory.getSchema(type)
                                .find(filters)
                                .updateOne(updateSocialMedia)
                                .then(function () { return function_1["default"].getActionResult(null, 200, null, define_1["default"].RESULT.SOCIAL_MEDIA.update); })["catch"](function (err) {
                                logger_1["default"].error(err);
                                return function_1["default"].getActionResult(null, 403, err, define_1["default"].RESULT.SOCIAL_MEDIA.update);
                            })];
                    case 2:
                        updateResult = _a.sent();
                        return [2 /*return*/, updateResult];
                    case 3:
                        e_4 = _a.sent();
                        logger_1["default"].error(e_4);
                        return [2 /*return*/, function_1["default"].getActionResult(null, 400, e_4, define_1["default"].RESULT.SOCIAL_MEDIA.update)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return SocialMediaService;
}());
exports["default"] = SocialMediaService;
