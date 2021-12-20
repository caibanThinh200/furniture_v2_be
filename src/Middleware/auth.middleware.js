"use strict";
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
exports.ValidateJWT = exports.ValidateRegister = void 0;
var UserFactory_1 = require("../Factory/Creator/UserFactory");
var function_1 = require("../Utils/function");
var define_1 = require("../Constant/define");
var jsonwebtoken_1 = require("jsonwebtoken");
var ValidateRegister = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var userFactory, isEmailValid, isEmailAvailable, isValidName, isValidPhone, isPhoneAvailable, isValidAdress, isValidPassword;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                userFactory = UserFactory_1.UserFactory.createUser(req.body, req.headers["type"]);
                isEmailValid = !!((_a = userFactory) === null || _a === void 0 ? void 0 : _a.email) &&
                    !!function_1["default"].checkEmailValue((_b = userFactory) === null || _b === void 0 ? void 0 : _b.email);
                return [4 /*yield*/, UserFactory_1.UserFactory.getSchema(req.headers["type"]).find({ email: userFactory.email })];
            case 1:
                isEmailAvailable = ((_k.sent()) || []).length === 0;
                isValidName = !!((_c = userFactory) === null || _c === void 0 ? void 0 : _c.name) &&
                    !function_1["default"].checkSpicialCharacter((_d = userFactory) === null || _d === void 0 ? void 0 : _d.name);
                isValidPhone = !!((_e = userFactory) === null || _e === void 0 ? void 0 : _e.phone) &&
                    !function_1["default"].checkPhoneNumberValue((_f = userFactory) === null || _f === void 0 ? void 0 : _f.phone);
                return [4 /*yield*/, UserFactory_1.UserFactory.getSchema(req.headers["type"]).find({ phone: userFactory.phone })];
            case 2:
                isPhoneAvailable = ((_k.sent()) || []).length === 0;
                isValidAdress = !!((_g = userFactory) === null || _g === void 0 ? void 0 : _g.address);
                isValidPassword = !!((_h = userFactory) === null || _h === void 0 ? void 0 : _h.password) && !function_1["default"].checkSpicialCharacter((_j = userFactory) === null || _j === void 0 ? void 0 : _j.password);
                switch (false) {
                    case isValidName: return [2 /*return*/, function_1["default"].responseBadRequest(define_1["default"].VALIDATION.USER.name, res)];
                    case isValidPhone: return [2 /*return*/, function_1["default"].responseBadRequest(define_1["default"].VALIDATION.USER.phone, res)];
                    case isPhoneAvailable: return [2 /*return*/, function_1["default"].responseBadRequest(define_1["default"].VALIDATION.USER.unavailablePhone, res)];
                    case isValidAdress: return [2 /*return*/, function_1["default"].responseBadRequest(define_1["default"].VALIDATION.USER.address, res)];
                    case isEmailValid: return [2 /*return*/, function_1["default"].responseBadRequest(define_1["default"].VALIDATION.USER.email, res)];
                    case isEmailAvailable: return [2 /*return*/, function_1["default"].responseBadRequest(define_1["default"].VALIDATION.USER.unavailableEmail, res)];
                    case isValidPassword: return [2 /*return*/, function_1["default"].responseBadRequest(define_1["default"].VALIDATION.USER.password, res)];
                    default: next();
                }
                return [2 /*return*/];
        }
    });
}); };
exports.ValidateRegister = ValidateRegister;
var ValidateJWT = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var token;
    return __generator(this, function (_a) {
        token = req.header("Authorization").replace("Bearer ", "") || "";
        jsonwebtoken_1["default"].verify(token, process.env.SECRET_JWT, function (err, decoded) {
            if (err) {
                return function_1["default"].responseAuthorizeRequest(err.message, res);
            }
            else {
                next();
            }
        });
        return [2 /*return*/];
    });
}); };
exports.ValidateJWT = ValidateJWT;
