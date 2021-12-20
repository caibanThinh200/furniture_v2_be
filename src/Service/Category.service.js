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
var CategoryFactory_1 = require("../Factory/Creator/CategoryFactory");
var CategoryService = /** @class */ (function () {
    function CategoryService() {
    }
    CategoryService.AddCategoryService = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var type, categoryFactory, rootCategory, result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        type = req.headers["type"];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        categoryFactory = CategoryFactory_1.CategoryFactory.createCategory(req.body, req.headers.type);
                        rootCategory = CategoryFactory_1.CategoryFactory.createSchema(categoryFactory, req.headers.type);
                        return [4 /*yield*/, rootCategory
                                .save()
                                .then(function () {
                                return function_1["default"].getActionResult(null, 201, null, define_1["default"].RESULT.CATEGORY.create);
                            })["catch"](function (e) {
                                logger_1["default"].error(e);
                                return function_1["default"].getActionResult(null, 403, e, define_1["default"].RESULT.CATEGORY.create);
                            })];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 3:
                        e_1 = _a.sent();
                        logger_1["default"].error(e_1);
                        return [2 /*return*/, function_1["default"].getActionResult(null, 400, e_1, define_1["default"].RESULT.CATEGORY.create)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CategoryService.AddChildCateService = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var type, categoryId, rootCategory, newChild, result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        type = req.headers["type"];
                        categoryId = req.params.categoryId;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, CategoryFactory_1.CategoryFactory.getSchema(type).findById(categoryId)];
                    case 2:
                        rootCategory = _a.sent();
                        if (!rootCategory) {
                            return [2 /*return*/, function_1["default"].getActionResult(null, 400, { message: "Không có loại sản phẩm này" }, define_1["default"].RESULT.CATEGORY.create)];
                        }
                        newChild = CategoryFactory_1.CategoryFactory.createSchema(req.body, type);
                        rootCategory.AddChildCate(rootCategory, newChild, req.query.nodeId);
                        return [4 /*yield*/, rootCategory
                                .save()
                                .then(function () {
                                return function_1["default"].getActionResult(null, 201, null, define_1["default"].RESULT.CATEGORY.create);
                            })["catch"](function (e) {
                                logger_1["default"].error(e);
                                return function_1["default"].getActionResult(null, 403, e, define_1["default"].RESULT.CATEGORY.create);
                            })];
                    case 3:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 4:
                        error_1 = _a.sent();
                        logger_1["default"].error(error_1);
                        return [2 /*return*/, function_1["default"].getActionResult(null, 400, error_1, define_1["default"].RESULT.CATEGORY.create)];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    CategoryService.getDetailChildCate = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var type, _a, categoryId, categoryDetailId, rootCategory, childCate, e_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        type = req.headers["type"];
                        _a = req.params, categoryId = _a.categoryId, categoryDetailId = _a.categoryDetailId;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, CategoryFactory_1.CategoryFactory.getSchema(type).findById(categoryId)];
                    case 2:
                        rootCategory = _b.sent();
                        if (!rootCategory) {
                            return [2 /*return*/, function_1["default"].getActionResult(null, 400, { message: "Không có loại sản phẩm này" }, define_1["default"].RESULT.CATEGORY.create)];
                        }
                        childCate = rootCategory.FindChild(rootCategory, categoryDetailId);
                        if (childCate) {
                            return [2 /*return*/, function_1["default"].getActionResult(childCate, 200, null)];
                        }
                        else {
                            return [2 /*return*/, function_1["default"].getActionResult(null, 400, null, define_1["default"].RESULT.CATEGORY.getDetail)];
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_2 = _b.sent();
                        logger_1["default"].error(e_2);
                        return [2 /*return*/, function_1["default"].getActionResult(null, 400, e_2, define_1["default"].RESULT.CATEGORY.getDetail)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // public static async DeleteChildCateService(req: any){
    //     const type = req.headers["type"];
    //     const { categoryId, categoryDetailId } = req.params;
    //     try {
    //         const rootCategory = await CategoryFactory.getSchema(type).findById(
    //             categoryId
    //         );
    //         if (!rootCategory) {
    //             return CommonFunction.getActionResult(
    //                 null,
    //                 400,
    //                 { message: "Không có loại sản phẩm này" },
    //                 TAG_DEFINE.RESULT.CATEGORY.create
    //             );
    //         }
    //         rootCategory.RemoveChildCate(rootCategory, categoryDetailId);
    //         const result = await rootCategory
    //             .save()
    //             .then(() =>
    //                 CommonFunction.getActionResult(
    //                     null,
    //                     201,
    //                     null,
    //                     TAG_DEFINE.RESULT.CATEGORY.delete
    //                 )
    //             )
    //             .catch((e) => {
    //                 logger.error(e);
    //                 return CommonFunction.getActionResult(
    //                     null,
    //                     403,
    //                     e,
    //                     TAG_DEFINE.RESULT.CATEGORY.delete
    //                 );
    //             });
    //         return result;
    //     } catch (e) {
    //         logger.error(e);
    //         return CommonFunction.getActionResult(
    //             null,
    //             400,
    //             e,
    //             TAG_DEFINE.RESULT.CATEGORY.delete
    //         );
    //     }
    // }
    CategoryService.GetListCategoryService = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var type_1, category, categoryFactory, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        type_1 = req.headers["type"];
                        return [4 /*yield*/, CategoryFactory_1.CategoryFactory.getSchema(type_1).find()];
                    case 1:
                        category = _a.sent();
                        categoryFactory = category.map(function (item) {
                            return CategoryFactory_1.CategoryFactory.getCategory(item, type_1);
                        });
                        return [2 /*return*/, function_1["default"].getActionResult(categoryFactory, 200, null)];
                    case 2:
                        e_3 = _a.sent();
                        logger_1["default"].error(e_3);
                        return [2 /*return*/, function_1["default"].getActionResult(null, 400, e_3, define_1["default"].RESULT.CATEGORY.getList)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CategoryService.GetDetailCategoryService = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var type, id, category, categoryFactory, e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        type = req.headers["type"];
                        id = (req.params || "").id;
                        return [4 /*yield*/, CategoryFactory_1.CategoryFactory.getSchema(type).findById(id)];
                    case 1:
                        category = _a.sent();
                        categoryFactory = CategoryFactory_1.CategoryFactory.getCategory(category, type);
                        return [2 /*return*/, function_1["default"].getActionResult(categoryFactory, 200, null)];
                    case 2:
                        e_4 = _a.sent();
                        logger_1["default"].error(e_4);
                        return [2 /*return*/, function_1["default"].getActionResult(null, 400, e_4, define_1["default"].RESULT.CATEGORY.getDetail)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CategoryService.UpdateCategoryService = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var type, id, currentcategory, filters, newRequest, updatecategory, updateResult, e_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        type = req.headers["type"];
                        id = (req.params || "").id;
                        return [4 /*yield*/, this.GetDetailCategoryService(req)];
                    case 1:
                        currentcategory = _a.sent();
                        filters = currentcategory[0] || {};
                        newRequest = __assign(__assign({}, currentcategory[0]), req.body);
                        updatecategory = CategoryFactory_1.CategoryFactory.createCategory(newRequest, req.query);
                        return [4 /*yield*/, CategoryFactory_1.CategoryFactory.getSchema(type)
                                .find(filters)
                                .updateOne(updatecategory)
                                .then(function () {
                                return function_1["default"].getActionResult(null, 200, null, define_1["default"].RESULT.CATEGORY.update);
                            })["catch"](function (err) {
                                logger_1["default"].error(err);
                                return function_1["default"].getActionResult(null, 403, err, define_1["default"].RESULT.CATEGORY.update);
                            })];
                    case 2:
                        updateResult = _a.sent();
                        return [2 /*return*/, updateResult];
                    case 3:
                        e_5 = _a.sent();
                        logger_1["default"].error(e_5);
                        return [2 /*return*/, function_1["default"].getActionResult(null, 400, e_5, define_1["default"].RESULT.CATEGORY.update)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CategoryService.DeleteCategoryService = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var type, id, result, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        type = req.headers["type"];
                        id = (req.params || "").id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, CategoryFactory_1.CategoryFactory.getSchema(type)
                                .findByIdAndDelete(id)
                                .then(function () {
                                return function_1["default"].getActionResult(null, 200, null, define_1["default"].RESULT.CATEGORY["delete"]);
                            })["catch"](function (e) {
                                logger_1["default"].error(e);
                                return function_1["default"].getActionResult(null, 403, null, define_1["default"].RESULT.CATEGORY["delete"]);
                            })];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 3:
                        error_2 = _a.sent();
                        logger_1["default"].error(error_2);
                        return [2 /*return*/, function_1["default"].getActionResult(null, 400, error_2, define_1["default"].RESULT.CATEGORY.update)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return CategoryService;
}());
exports["default"] = CategoryService;
