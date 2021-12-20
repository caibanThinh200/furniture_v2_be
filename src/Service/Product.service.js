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
var excelParser_1 = require("../Config/excelParser");
var logger_1 = require("../Config/logger");
var define_1 = require("../Constant/define");
var CategoryFactory_1 = require("../Factory/Creator/CategoryFactory");
var ProductFactory_1 = require("../Factory/Creator/ProductFactory");
var function_1 = require("../Utils/function");
var _ = require("lodash");
var lodash_1 = require("lodash");
var AccessoryFactory_1 = require("../Factory/Creator/AccessoryFactory");
var ProductService = /** @class */ (function () {
    function ProductService() {
    }
    ProductService.AddProductByExcelService = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var initProduct, dataField, listData;
            var _this = this;
            return __generator(this, function (_a) {
                try {
                    initProduct = ProductFactory_1.ProductFactory.createProduct(null, req.headers['type']);
                    dataField = {
                        path: define_1.DEFINE_INFOMATION.PRODUCT_EXCEL,
                        objects: Object.keys(initProduct)
                    };
                    listData = new excelParser_1["default"](dataField)["data"]["Sheet1"];
                    function_1["default"].getInstance().testFunc();
                    return [2 /*return*/, Promise.all(listData.map(function (item) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.AddProductService(__assign(__assign({}, req), { body: item }))];
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
    ProductService.AddProductService = function (req) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var attributeName_1, listAttribute, productFactory, product, result, e_1;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        attributeName_1 = {};
                        listAttribute = Object.keys(((_a = req.body) === null || _a === void 0 ? void 0 : _a.attribute) || {}).map(function (item) { return __awaiter(_this, void 0, void 0, function () {
                            var accessory;
                            var _a;
                            var _b, _c;
                            return __generator(this, function (_d) {
                                switch (_d.label) {
                                    case 0: return [4 /*yield*/, AccessoryFactory_1.AccessoryFactory.getSchema(req.headers['type']).findOne({ _id: item })];
                                    case 1:
                                        accessory = _d.sent();
                                        attributeName_1 = __assign(__assign({}, attributeName_1), (_a = {}, _a[(_b = accessory === null || accessory === void 0 ? void 0 : accessory.name) === null || _b === void 0 ? void 0 : _b.toString()] = (_c = req.body) === null || _c === void 0 ? void 0 : _c.attribute[item], _a));
                                        return [2 /*return*/, attributeName_1];
                                }
                            });
                        }); });
                        return [4 /*yield*/, Promise.all(listAttribute)];
                    case 1:
                        _b.sent();
                        productFactory = ProductFactory_1.ProductFactory.createProduct(__assign(__assign({}, req.body), { attribute: attributeName_1 }), req.headers['type']);
                        product = ProductFactory_1.ProductFactory.createSchema(productFactory, req.headers['type']);
                        return [4 /*yield*/, product.save()
                                .then(function () { return function_1["default"].getActionResult(null, 201, null, define_1["default"].RESULT.PRODUCT.create); })["catch"](function (e) {
                                logger_1["default"].error(e);
                                return function_1["default"].getActionResult(null, 403, e, define_1["default"].RESULT.PRODUCT.create);
                            })];
                    case 2:
                        result = _b.sent();
                        return [2 /*return*/, result];
                    case 3:
                        e_1 = _b.sent();
                        logger_1["default"].error(e_1);
                        return [2 /*return*/, function_1["default"].getActionResult(null, 400, e_1, define_1["default"].RESULT.PRODUCT.create)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProductService.GetInitProductService = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var type_1, initProduct, product, productFactoryNewCode, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        type_1 = req.headers['type'];
                        return [4 /*yield*/, ProductFactory_1.ProductFactory.createProduct(null, type_1)];
                    case 1:
                        initProduct = _a.sent();
                        return [4 /*yield*/, ProductFactory_1.ProductFactory.getSchema(type_1).find({})];
                    case 2:
                        product = _a.sent();
                        productFactoryNewCode = product.map(function (item) { return ProductFactory_1.ProductFactory.getProduct(item, type_1); }).length + 1;
                        initProduct = __assign(__assign({}, initProduct), { code: productFactoryNewCode });
                        return [2 /*return*/, function_1["default"].getActionResult(initProduct, 200, null)];
                    case 3:
                        e_2 = _a.sent();
                        logger_1["default"].error(e_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProductService.GetListProductService = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var type_2, product, productFactory, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        type_2 = req.headers['type'];
                        return [4 /*yield*/, ProductFactory_1.ProductFactory.getSchema(type_2).find({})];
                    case 1:
                        product = _a.sent();
                        productFactory = product.map(function (item) { return ProductFactory_1.ProductFactory.getProduct(item, type_2); });
                        return [2 /*return*/, function_1["default"].getActionResult(productFactory, 200, null)];
                    case 2:
                        e_3 = _a.sent();
                        logger_1["default"].error(e_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProductService.GetFilterProductService = function (req) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function () {
            var type_3, startIndex, endIndex, arr_1, rootCategories, _e, filterProduct, filterPromise, listAll, pageCount, e_4;
            var _this = this;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        _f.trys.push([0, 6, , 7]);
                        type_3 = req.headers['type'];
                        startIndex = ((((_a = req === null || req === void 0 ? void 0 : req.query) === null || _a === void 0 ? void 0 : _a.page_index) || 1) - 1) * (((_b = req === null || req === void 0 ? void 0 : req.query) === null || _b === void 0 ? void 0 : _b.page_size) || 10);
                        endIndex = ((((_c = req === null || req === void 0 ? void 0 : req.query) === null || _c === void 0 ? void 0 : _c.page_index) || 1)) * (((_d = req === null || req === void 0 ? void 0 : req.query) === null || _d === void 0 ? void 0 : _d.page_size) || 10);
                        return [4 /*yield*/, ProductFactory_1.ProductFactory.getSchema(type_3).find((0, lodash_1.omit)(req === null || req === void 0 ? void 0 : req.query, ["page_size", "page_index", "cate"]))];
                    case 1:
                        arr_1 = _f.sent();
                        _e = req.query.cate;
                        if (!_e) return [3 /*break*/, 3];
                        return [4 /*yield*/, CategoryFactory_1.CategoryFactory.getSchema(type_3).find()];
                    case 2:
                        _e = (_f.sent());
                        _f.label = 3;
                    case 3:
                        rootCategories = _e;
                        if (req.query.cate) {
                            (function_1["default"].generateTreeData(rootCategories, []) || []).forEach(function (item) {
                                var _a;
                                if (item.name === ((_a = req.query) === null || _a === void 0 ? void 0 : _a.cate)) {
                                    arr_1 = ((item === null || item === void 0 ? void 0 : item.products) || []);
                                }
                            });
                        }
                        filterProduct = arr_1.map(function (id) { return __awaiter(_this, void 0, void 0, function () {
                            var product;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, ProductFactory_1.ProductFactory.getSchema(type_3).findOne({ _id: id })];
                                    case 1:
                                        product = _a.sent();
                                        return [2 /*return*/, ProductFactory_1.ProductFactory.getProduct(product, type_3)];
                                }
                            });
                        }); });
                        return [4 /*yield*/, Promise.all(filterProduct)];
                    case 4:
                        filterPromise = _f.sent();
                        return [4 /*yield*/, this.GetListProductService(req)];
                    case 5:
                        listAll = (_f.sent());
                        pageCount = function_1["default"].getPageCount(listAll.result.length, req.query.page_size);
                        return [2 /*return*/, __assign(__assign({}, function_1["default"].getActionResult(filterPromise.slice(startIndex, endIndex), 200, null)), { total: listAll.result.length, page_index: parseInt(req.query.page_index) || 1, page_size: parseInt(req.query.page_size) || 10, page_count: pageCount })];
                    case 6:
                        e_4 = _f.sent();
                        logger_1["default"].error(e_4);
                        return [2 /*return*/, false];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    ProductService.GetDetailProductService = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var type, id, product, productFactory, e_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        type = req.headers["type"];
                        id = (req.params || "").id;
                        return [4 /*yield*/, ProductFactory_1.ProductFactory.getSchema(type).findById(id)];
                    case 1:
                        product = _a.sent();
                        productFactory = ProductFactory_1.ProductFactory.getProduct(product, type);
                        return [2 /*return*/, function_1["default"].getActionResult(productFactory, 200, null)];
                    case 2:
                        e_5 = _a.sent();
                        logger_1["default"].error(e_5);
                        return [2 /*return*/, function_1["default"].getActionResult(null, 400, e_5, define_1["default"].RESULT.PRODUCT.getDetail)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ProductService.UpdateProductService = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var type, currentProduct, filters, images_1, newRequest, updateProduct, updateResult, e_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        type = req.headers["type"];
                        return [4 /*yield*/, this.GetDetailProductService(req)];
                    case 1:
                        currentProduct = _a.sent();
                        filters = (currentProduct === null || currentProduct === void 0 ? void 0 : currentProduct.result) || {};
                        images_1 = [];
                        Object.values(req === null || req === void 0 ? void 0 : req.files).map((function (m, n) {
                            var _a;
                            return (((_a = req.body) === null || _a === void 0 ? void 0 : _a.role) || []).map(function (i, k) {
                                var _a;
                                if (n === k) {
                                    images_1.push(__assign(__assign({}, m), { role: i, name: (_a = req.body) === null || _a === void 0 ? void 0 : _a.name }));
                                }
                            });
                        }));
                        newRequest = __assign(__assign(__assign({}, currentProduct === null || currentProduct === void 0 ? void 0 : currentProduct.result), _.omit(req.body, ["role"])), { images: images_1 });
                        updateProduct = ProductFactory_1.ProductFactory.createProduct(newRequest, type);
                        return [4 /*yield*/, ProductFactory_1.ProductFactory.getSchema(type)
                                .find(filters)
                                .updateOne(updateProduct)
                                .then(function () { return function_1["default"].getActionResult(null, 200, null, define_1["default"].RESULT.PRODUCT.update); })["catch"](function (err) {
                                logger_1["default"].error(err);
                                return function_1["default"].getActionResult(null, 403, err, define_1["default"].RESULT.PRODUCT.update);
                            })];
                    case 2:
                        updateResult = _a.sent();
                        return [2 /*return*/, updateResult];
                    case 3:
                        e_6 = _a.sent();
                        logger_1["default"].error(e_6);
                        return [2 /*return*/, function_1["default"].getActionResult(null, 400, e_6, define_1["default"].RESULT.PRODUCT.update)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProductService.DeleteProductService = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var type, id, product, result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        type = req.headers["type"];
                        id = req.params.id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, ProductFactory_1.ProductFactory.getSchema(type)];
                    case 2:
                        product = _a.sent();
                        return [4 /*yield*/, product.findByIdAndDelete(id)
                                .then(function () {
                                return function_1["default"].getActionResult(null, 200, null, define_1["default"].RESULT.PRODUCT["delete"]);
                            })["catch"](function (err) {
                                logger_1["default"].error(err);
                                return function_1["default"].getActionResult(null, 403, err, define_1["default"].RESULT.PRODUCT["delete"]);
                            })];
                    case 3:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 4:
                        error_1 = _a.sent();
                        logger_1["default"].error(error_1);
                        return [2 /*return*/, function_1["default"].getActionResult(null, 400, error_1, define_1["default"].RESULT.PRODUCT["delete"])];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return ProductService;
}());
exports["default"] = ProductService;
