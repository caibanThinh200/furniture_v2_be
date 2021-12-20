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
var ProductTypeFactory_1 = require("../Factory/Creator/ProductTypeFactory");
var lodash_1 = require("lodash");
var define_2 = require("../Constant/define");
var excelParser_1 = require("../Config/excelParser");
var ProductTypeService = /** @class */ (function () {
    function ProductTypeService() {
    }
    ProductTypeService.AddProductTypeByExcelService = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var initProduct, dataField, listData;
            var _this = this;
            return __generator(this, function (_a) {
                try {
                    initProduct = ProductTypeFactory_1.ProductTypeFactory.createProductType(null, req.headers['type']);
                    dataField = {
                        path: define_2.DEFINE_INFOMATION.PRODUCT_EXCEL,
                        objects: Object.keys(initProduct)
                    };
                    listData = new excelParser_1["default"](dataField)["data"]["Sheet1"];
                    return [2 /*return*/, Promise.all(listData.map(function (item) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.AddProductTypeService(__assign(__assign({}, req), { body: item }))];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                }
                catch (e) {
                    logger_1["default"].error(e);
                    return [2 /*return*/, false];
                }
                return [2 /*return*/];
            });
        });
    };
    ProductTypeService.AddProductTypeService = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var productTypeFactory, productType, result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        productTypeFactory = ProductTypeFactory_1.ProductTypeFactory.createProductType(req.body, req.headers['type']);
                        productType = ProductTypeFactory_1.ProductTypeFactory.createSchema(productTypeFactory, req.headers['type']);
                        return [4 /*yield*/, productType.save()
                                .then(function () { return function_1["default"].getActionResult(null, 201, null, define_1["default"].RESULT.PRODUCT_TYPE.create); })["catch"](function (e) {
                                logger_1["default"].error(e);
                                return function_1["default"].getActionResult(null, 403, e, define_1["default"].RESULT.PRODUCT_TYPE.create);
                            })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 2:
                        e_1 = _a.sent();
                        logger_1["default"].error(e_1);
                        return [2 /*return*/, function_1["default"].getActionResult(null, 400, e_1, define_1["default"].RESULT.PRODUCT_TYPE.create)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProductTypeService.GetProductTypeCountService = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var type, initProductType, totalCount, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        type = req.headers['type'];
                        initProductType = ProductTypeFactory_1.ProductTypeFactory.createProductType(null, type);
                        return [4 /*yield*/, ProductTypeFactory_1.ProductTypeFactory.getSchema(type).find()];
                    case 1:
                        totalCount = (_a.sent());
                        return [2 /*return*/, function_1["default"].getActionResult(__assign(__assign({}, initProductType), { type: totalCount.length + 1 }), 200, null)];
                    case 2:
                        e_2 = _a.sent();
                        logger_1["default"].error(e_2);
                        return [2 /*return*/, function_1["default"].getActionResult(null, 400, e_2, define_1["default"].RESULT.PRODUCT_TYPE.getCount)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProductTypeService.GetListAllProductTypeService = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var type_1, productType, productTypeFactory, pagination, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        type_1 = req.headers['type'];
                        return [4 /*yield*/, ProductTypeFactory_1.ProductTypeFactory.getSchema(type_1).find().populate("attribute")];
                    case 1:
                        productType = _a.sent();
                        return [4 /*yield*/, productType.map(function (item) { return ProductTypeFactory_1.ProductTypeFactory.getProductType(item, type_1); })];
                    case 2:
                        productTypeFactory = _a.sent();
                        pagination = {
                            total: productTypeFactory.length,
                            page_index: 1,
                            page_size: 10,
                            page_count: function_1["default"].getPageCount(productTypeFactory.length, 10)
                        };
                        return [2 /*return*/, __assign(__assign({}, function_1["default"].getActionResult(productTypeFactory, 200, null)), pagination)];
                    case 3:
                        e_3 = _a.sent();
                        logger_1["default"].error(e_3);
                        return [2 /*return*/, function_1["default"].getActionResult(null, 400, e_3, define_1["default"].RESULT.PRODUCT_TYPE.getList)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProductTypeService.GetListProductTypeService = function (req) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var type_2, filterParams, pageIndex, pageSize, startIndex, endIndex, productType, productTypeFactory, pagination, e_4;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        type_2 = req.headers['type'];
                        filterParams = (0, lodash_1.omit)(req.query, ["page_index", "page_size"]);
                        pageIndex = parseInt((_a = req.query) === null || _a === void 0 ? void 0 : _a.page_index) || 1;
                        pageSize = parseInt((_b = req.query) === null || _b === void 0 ? void 0 : _b.page_size) || 10;
                        startIndex = ((pageIndex || 1) - 1) * (pageSize || 10);
                        endIndex = ((pageIndex || 1)) * (pageSize || 10);
                        return [4 /*yield*/, ProductTypeFactory_1.ProductTypeFactory.getSchema(type_2).find(filterParams).populate("attribute")];
                    case 1:
                        productType = _c.sent();
                        productTypeFactory = productType.map(function (item) { return ProductTypeFactory_1.ProductTypeFactory.getProductType(item, type_2); }).slice(startIndex, endIndex);
                        pagination = {
                            total: productType.length,
                            page_index: pageIndex,
                            page_size: pageSize,
                            page_count: function_1["default"].getPageCount(productType.length, pageSize)
                        };
                        return [2 /*return*/, __assign(__assign({}, function_1["default"].getActionResult(productTypeFactory, 200, null)), pagination)];
                    case 2:
                        e_4 = _c.sent();
                        logger_1["default"].error(e_4);
                        return [2 /*return*/, function_1["default"].getActionResult(null, 400, e_4, define_1["default"].RESULT.PRODUCT_TYPE.getList)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProductTypeService.GetDetailProductTypeService = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var type, id, productType, productTypeFactory, e_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        type = req.headers['type'];
                        id = (req.params || "").id;
                        return [4 /*yield*/, ProductTypeFactory_1.ProductTypeFactory.getSchema(type).findOne({
                                _id: id
                            }).populate("attribute")];
                    case 1:
                        productType = _a.sent();
                        productTypeFactory = ProductTypeFactory_1.ProductTypeFactory.getProductType(productType, type);
                        return [2 /*return*/, function_1["default"].getActionResult(productTypeFactory, 200, null)];
                    case 2:
                        e_5 = _a.sent();
                        logger_1["default"].error(e_5);
                        return [2 /*return*/, function_1["default"].getActionResult(null, 400, e_5, define_1["default"].RESULT.PRODUCT_TYPE.getDetail)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProductTypeService.UpdateProductTypeService = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var type, id, currentProductType, filters, newRequest, updateProductType, updateResult, e_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        type = req.headers['type'];
                        id = (req.params || "").id;
                        return [4 /*yield*/, this.GetDetailProductTypeService(req)];
                    case 1:
                        currentProductType = _a.sent();
                        filters = currentProductType || {};
                        newRequest = __assign(__assign({}, currentProductType), req.body);
                        updateProductType = ProductTypeFactory_1.ProductTypeFactory.createProductType(newRequest, req.query);
                        return [4 /*yield*/, ProductTypeFactory_1.ProductTypeFactory.getSchema(type)
                                .find(filters)
                                .updateOne(updateProductType)
                                .then(function () { return function_1["default"].getActionResult(null, 200, null, define_1["default"].RESULT.PRODUCT_TYPE.update); })["catch"](function (err) {
                                logger_1["default"].error(err);
                                return function_1["default"].getActionResult(null, 403, err, define_1["default"].RESULT.PRODUCT_TYPE.update);
                            })];
                    case 2:
                        updateResult = _a.sent();
                        return [2 /*return*/, updateResult];
                    case 3:
                        e_6 = _a.sent();
                        logger_1["default"].error(e_6);
                        return [2 /*return*/, function_1["default"].getActionResult(null, 400, e_6, define_1["default"].RESULT.PRODUCT_TYPE.update)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return ProductTypeService;
}());
exports["default"] = ProductTypeService;
