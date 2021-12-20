"use strict";
exports.__esModule = true;
exports.CategoryFactory = void 0;
var category_1 = require("../Concreate/Furniture/Request/category");
var category_2 = require("../Concreate/Furniture/Response/category");
var furniture_1 = require("../../models/Categories/furniture");
// AA-store
var category_3 = require("../Concreate/AA-PET/Request/category");
var category_4 = require("../Concreate/AA-PET/Response/category");
var aa_store_1 = require("../../models/Categories/aa-store");
var define_1 = require("../../Constant/define");
var CategoryFactory = /** @class */ (function () {
    function CategoryFactory() {
    }
    CategoryFactory.createCategory = function (data, type) {
        switch (type) {
            case define_1["default"].STORE.FURNITURE:
                return new category_1["default"](data);
            case define_1["default"].STORE.AA_PET:
                return new category_3["default"](data);
            default:
                return new category_1["default"](data);
        }
    };
    CategoryFactory.getCategory = function (data, type) {
        switch (type) {
            case define_1["default"].STORE.FURNITURE:
                return new category_2["default"](data);
            case define_1["default"].STORE.AA_PET:
                return new category_4["default"](data);
            default:
                return new category_2["default"](data);
        }
    };
    CategoryFactory.createSchema = function (data, type) {
        switch (type) {
            case define_1["default"].STORE.FURNITURE:
                return new furniture_1["default"](data);
            case define_1["default"].STORE.AA_PET:
                return new aa_store_1["default"](data);
            default:
                return new furniture_1["default"](data);
        }
    };
    CategoryFactory.getSchema = function (type) {
        switch (type) {
            case define_1["default"].STORE.FURNITURE:
                return furniture_1["default"];
            case define_1["default"].STORE.AA_PET:
                return aa_store_1["default"];
            default:
                return furniture_1["default"];
        }
    };
    return CategoryFactory;
}());
exports.CategoryFactory = CategoryFactory;
