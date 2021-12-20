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
var bcrypt_1 = require("bcrypt");
var CommonFunction = /** @class */ (function () {
    function CommonFunction() {
        if (!CommonFunction.instance) {
            CommonFunction.instance = this;
        }
        return CommonFunction.instance;
    }
    CommonFunction.getInstance = function () {
        if (!this.instance) {
            this.instance = new CommonFunction;
        }
        return CommonFunction.instance;
    };
    // functions
    CommonFunction.formatInt = function (numberParams, defaultNum) {
        if (defaultNum === void 0) { defaultNum = 0; }
        return isNaN(numberParams) ? defaultNum : numberParams;
    };
    CommonFunction.customizeLogger = function (value, colors) {
        return logger_1["default"].info(value[colors]);
    };
    CommonFunction.capitalizeFirstLetter = function (value) {
        return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    };
    CommonFunction.getKeyByValue = function (object, value) {
        return Object.keys(object).find(function (key) { return object[key] === value; });
    };
    CommonFunction.getActionResult = function (result, code, error, value) {
        var num = code <= 500 && code >= 400 ? 500 : 200, status = code <= 500 && code >= 400 ? "FAILED" : "SUCCESS";
        return {
            status: status,
            code: code,
            result: result === null ? value + define_1["default"].RESULT[num] : result,
            error: error === null ? null : error.message
        };
    };
    CommonFunction.generateJSONObj = function (value) {
        return JSON.parse(JSON.stringify(value));
    };
    CommonFunction.getStoreSchema = function (value, store) {
        return "".concat(store, " ").concat(value);
    };
    CommonFunction.hashPassword = function (document) {
        return __awaiter(this, void 0, void 0, function () {
            var salt, hash;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, bcrypt_1["default"].genSalt(10)];
                    case 1:
                        salt = _a.sent();
                        return [4 /*yield*/, bcrypt_1["default"].hash(document.password, salt)];
                    case 2:
                        hash = _a.sent();
                        document.password = hash;
                        return [2 /*return*/];
                }
            });
        });
    };
    CommonFunction.validateGender = function (document) {
        return __awaiter(this, void 0, void 0, function () {
            var gender, result;
            return __generator(this, function (_a) {
                gender = parseInt(document.gender) || 0;
                result = '';
                switch (gender) {
                    case 0:
                        result = "Male";
                    case 1:
                        result = "Female";
                    case 2:
                        result = "Not sure";
                    default:
                        result = "Male";
                }
                document.gender = result;
                return [2 /*return*/];
            });
        });
    };
    CommonFunction.UpdateTime = function (document) {
        return __awaiter(this, void 0, void 0, function () {
            var now;
            return __generator(this, function (_a) {
                now = Date.now();
                document.updated_at = now;
                return [2 /*return*/];
            });
        });
    };
    CommonFunction.checkSpicialCharacter = function (value) {
        return value.match(/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/);
    };
    CommonFunction.checkPhoneNumberValue = function (value) {
        return value.match(/^\d{11}$/);
    };
    CommonFunction.checkEmailValue = function (value) {
        return value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    };
    CommonFunction.hasNumberInString = function (value) {
        return /\d/.test(value);
    };
    CommonFunction.responseBadRequest = function (message, res) {
        res.json({
            status: define_1["default"].STATUS.failed,
            result: null,
            error: {
                code: 400,
                message: message
            }
        });
    };
    CommonFunction.responseAuthorizeRequest = function (message, res) {
        res.json({
            status: define_1["default"].STATUS.failed,
            result: null,
            error: {
                code: 501,
                message: message
            }
        });
    };
    CommonFunction.getAlphabetObject = function (objectKeys) {
        var alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
        var obj = {};
        alphabet.map(function (char, n) {
            objectKeys.length > 0 && objectKeys.map(function (key, k) {
                var _a;
                if (n === k) {
                    obj = __assign(__assign({}, obj), (_a = {}, _a[char] = key, _a));
                }
            });
        });
        return obj;
    };
    CommonFunction.generateTreeData = function (data, existingChildren) {
        var _this = this;
        data.forEach(function (o) {
            existingChildren.push(o);
            (o === null || o === void 0 ? void 0 : o.childCate) && _this.generateTreeData(o === null || o === void 0 ? void 0 : o.childCate, existingChildren);
        });
        return existingChildren;
    };
    CommonFunction.getPageCount = function (total, page_size) {
        total = parseInt(total),
            page_size = parseInt(page_size);
        return ((total / page_size)) % 1 !== 0 ? Math.floor(total / page_size) + 1 : total / page_size;
    };
    CommonFunction.prototype.testFunc = function () {
        console.log(123123);
    };
    return CommonFunction;
}());
exports["default"] = CommonFunction;
