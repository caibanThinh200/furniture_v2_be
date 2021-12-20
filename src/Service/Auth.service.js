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
var UserFactory_1 = require("../Factory/Creator/UserFactory");
var bcrypt_1 = require("bcrypt");
var jsonwebtoken_1 = require("jsonwebtoken");
var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.RegisterService = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var type, userFactory, user, result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        type = req.headers["type"];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        userFactory = UserFactory_1.UserFactory.createUser(req.body, type);
                        user = UserFactory_1.UserFactory.createSchema(userFactory, type);
                        return [4 /*yield*/, user
                                .save()
                                .then(function () {
                                return function_1["default"].getActionResult(null, 201, null, define_1["default"].RESULT.AUTH.REGISTER);
                            })["catch"](function (e) {
                                logger_1["default"].error(e);
                                return function_1["default"].getActionResult(null, 403, e, define_1["default"].RESULT.AUTH.REGISTER);
                            })];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 3:
                        error_1 = _a.sent();
                        logger_1["default"].error(error_1);
                        return [2 /*return*/, function_1["default"].getActionResult(null, 400, error_1, define_1["default"].RESULT.AUTH.REGISTER)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.LoginService = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var type, _a, email, password, username, existingUser, comparePassword, _b, token, result, error_2;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        type = req.headers.type;
                        _a = req.body, email = _a.email, password = _a.password, username = _a.username;
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 7, , 8]);
                        return [4 /*yield*/, UserFactory_1.UserFactory.getSchema(type).findOne({ email: email })];
                    case 2:
                        existingUser = _c.sent();
                        if (!!existingUser) return [3 /*break*/, 4];
                        return [4 /*yield*/, UserFactory_1.UserFactory.getSchema(type).findOne({
                                username: username
                            })];
                    case 3:
                        existingUser = _c.sent();
                        _c.label = 4;
                    case 4:
                        _b = existingUser;
                        if (!_b) return [3 /*break*/, 6];
                        return [4 /*yield*/, bcrypt_1["default"].compare(password, existingUser === null || existingUser === void 0 ? void 0 : existingUser.password)];
                    case 5:
                        _b = (_c.sent());
                        _c.label = 6;
                    case 6:
                        comparePassword = _b;
                        if (!existingUser || !comparePassword) {
                            return [2 /*return*/, function_1["default"].getActionResult(null, 403, null, define_1["default"].RESULT.AUTH.LOGIN.exist)];
                        }
                        else {
                            token = jsonwebtoken_1["default"].sign({
                                _id: existingUser._id
                            }, process.env.SECRET_JWT, { expiresIn: "1 day" });
                            result = function_1["default"].getActionResult({ token: token }, 200, null);
                            return [2 /*return*/, result];
                        }
                        return [3 /*break*/, 8];
                    case 7:
                        error_2 = _c.sent();
                        logger_1["default"].error(error_2);
                        return [2 /*return*/, function_1["default"].getActionResult(null, 400, error_2, define_1["default"].RESULT.AUTH.LOGIN.failed)];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.GetDetailUserService = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var type, id, user, userFactory, result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        type = req.headers["type"];
                        id = (req.params || "").id;
                        return [4 /*yield*/, UserFactory_1.UserFactory.getSchema(type).findOne({
                                type: type,
                                _id: id
                            })];
                    case 1:
                        user = _a.sent();
                        userFactory = UserFactory_1.UserFactory.getUser(user, type);
                        result = function_1["default"].getActionResult(userFactory, 200, null);
                        return [2 /*return*/, result];
                    case 2:
                        e_1 = _a.sent();
                        logger_1["default"].error(e_1);
                        return [2 /*return*/, function_1["default"].getActionResult(null, 400, e_1, define_1["default"].RESULT.AUTH.getDetail)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.UpdateUserService = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var type, id, currentUser, filters, newRequest, updateUser, updateResult, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        type = req.headers["type"];
                        id = (req.params || "").id;
                        return [4 /*yield*/, this.GetDetailUserService(req)];
                    case 1:
                        currentUser = _a.sent();
                        filters = currentUser[0] || {};
                        newRequest = __assign(__assign({}, currentUser[0]), req.body);
                        updateUser = UserFactory_1.UserFactory.createUser(newRequest, req.query);
                        return [4 /*yield*/, UserFactory_1.UserFactory.getSchema(type)
                                .find(filters)
                                .updateOne(updateUser)
                                .then(function () {
                                return function_1["default"].getActionResult(null, 200, null, define_1["default"].RESULT.AUTH.update);
                            })["catch"](function (err) {
                                logger_1["default"].error(err);
                                return function_1["default"].getActionResult(null, 403, err, define_1["default"].RESULT.AUTH.update);
                            })];
                    case 2:
                        updateResult = _a.sent();
                        return [2 /*return*/, updateResult];
                    case 3:
                        e_2 = _a.sent();
                        logger_1["default"].error(e_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.GetUserByJWT = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var token, type, userId, userInfo, _a, result, e_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 5, , 6]);
                        token = req.header("Authorization").replace("Bearer ", "");
                        type = req.headers["type"];
                        if (!token) return [3 /*break*/, 3];
                        userId = jsonwebtoken_1["default"].verify(token, process.env.SECRET_JWT);
                        _a = userId;
                        if (!_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, UserFactory_1.UserFactory.getSchema(type).findById({
                                _id: userId._id
                            }).select({ password: 0 })];
                    case 1:
                        _a = (_b.sent());
                        _b.label = 2;
                    case 2:
                        userInfo = (_a) ||
                            {};
                        result = function_1["default"].getActionResult(userInfo ? UserFactory_1.UserFactory.getUser(userInfo, type) : {}, 200, null);
                        return [2 /*return*/, result];
                    case 3: return [2 /*return*/, function_1["default"].getActionResult({}, 200, { message: "Have no token" })];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        e_3 = _b.sent();
                        logger_1["default"].error(e_3);
                        return [2 /*return*/, function_1["default"].getActionResult(null, 400, e_3, define_1["default"].RESULT.AUTH.getDetail)];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return AuthService;
}());
exports["default"] = AuthService;
