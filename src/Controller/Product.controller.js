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
var Product_service_1 = require("../Service/Product.service");
var logger_1 = require("../Config/logger");
var define_1 = require("../Constant/define");
var function_1 = require("../Utils/function");
var ProductController = /** @class */ (function () {
    function ProductController() {
    }
    ProductController.AddProductByExcelController = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Product_service_1["default"].AddProductByExcelService(req)];
                    case 1:
                        result = _a.sent();
                        res.status(200).json(result);
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        logger_1["default"].error(e_1);
                        res.status(500).json(function_1["default"].getActionResult(null, 500, e_1, define_1["default"].RESULT.PRODUCT.create));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProductController.AddProductController = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Product_service_1["default"].AddProductService(req)];
                    case 1:
                        result = _a.sent();
                        res.status(200).json(result);
                        return [3 /*break*/, 3];
                    case 2:
                        e_2 = _a.sent();
                        logger_1["default"].error(e_2);
                        res.status(500).json(function_1["default"].getActionResult(null, 500, e_2, define_1["default"].RESULT.PRODUCT.create));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProductController.GetInitProductController = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Product_service_1["default"].GetInitProductService(req)];
                    case 1:
                        result = _a.sent();
                        res.status(200).json(result);
                        return [3 /*break*/, 3];
                    case 2:
                        e_3 = _a.sent();
                        logger_1["default"].erro(e_3);
                        res.status(500).json(function_1["default"].getActionResult(null, 500, e_3, define_1["default"].RESULT.PRODUCT.getList));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProductController.GetListProductController = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Product_service_1["default"].GetListProductService(req)];
                    case 1:
                        result = _a.sent();
                        res.status(200).json(result);
                        return [3 /*break*/, 3];
                    case 2:
                        e_4 = _a.sent();
                        logger_1["default"].error(e_4);
                        res.status(500).json(function_1["default"].getActionResult(null, 500, e_4, define_1["default"].RESULT.PRODUCT.getList));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProductController.GetFilterProductController = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Product_service_1["default"].GetFilterProductService(req)];
                    case 1:
                        result = _a.sent();
                        res.status(200).json(result);
                        return [3 /*break*/, 3];
                    case 2:
                        e_5 = _a.sent();
                        logger_1["default"].error(e_5);
                        res.status(500).json(function_1["default"].getActionResult(null, 500, e_5, define_1["default"].RESULT.PRODUCT.getList));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProductController.GetDetailProductController = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Product_service_1["default"].GetDetailProductService(req)];
                    case 1:
                        result = _a.sent();
                        res.status(200).json(result);
                        return [3 /*break*/, 3];
                    case 2:
                        e_6 = _a.sent();
                        logger_1["default"].error(e_6);
                        res.status(500).json(function_1["default"].getActionResult(null, 500, e_6, define_1["default"].RESULT.PRODUCT.getDetail));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProductController.UpdateProductController = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Product_service_1["default"].UpdateProductService(req)];
                    case 1:
                        result = _a.sent();
                        res.status(200).json(result);
                        return [3 /*break*/, 3];
                    case 2:
                        e_7 = _a.sent();
                        logger_1["default"].error(e_7);
                        res.status(500).json(function_1["default"].getActionResult(null, 500, e_7, define_1["default"].RESULT.PRODUCT.update));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProductController.DeleteProductController = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Product_service_1["default"].DeleteProductService(req)];
                    case 1:
                        result = _a.sent();
                        res.status(200).json(result);
                        return [3 /*break*/, 3];
                    case 2:
                        e_8 = _a.sent();
                        logger_1["default"].error(e_8);
                        res.status(500).json(function_1["default"].getActionResult(null, 500, e_8, define_1["default"].RESULT.PRODUCT["delete"]));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return ProductController;
}());
exports["default"] = ProductController;
