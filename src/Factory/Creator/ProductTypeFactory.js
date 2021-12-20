"use strict";
exports.__esModule = true;
exports.ProductTypeFactory = void 0;
var define_1 = require("../../Constant/define");
var productType_1 = require("../Concreate/Furniture/Request/productType");
var productType_2 = require("../Concreate/Furniture/Response/productType");
var furniture_1 = require("../../models/ProductType/furniture");
//AA-pet
var productType_3 = require("../Concreate/AA-PET/Request/productType");
var productType_4 = require("../Concreate/AA-PET/Response/productType");
var aa_pet_1 = require("../../models/ProductType/aa-pet");
var ProductTypeFactory = /** @class */ (function () {
    function ProductTypeFactory() {
    }
    ProductTypeFactory.createProductType = function (data, type) {
        switch (type) {
            case define_1["default"].STORE.FURNITURE:
                return new productType_1["default"](data);
            case define_1["default"].STORE.AA_PET:
                return new productType_3["default"](data);
            default:
                return new productType_1["default"](data);
        }
    };
    ProductTypeFactory.getProductType = function (data, type) {
        switch (type) {
            case define_1["default"].STORE.FURNITURE:
                return new productType_2["default"](data);
            case define_1["default"].STORE.AA_PET:
                return new productType_4["default"](data);
            default:
                return new productType_2["default"](data);
        }
    };
    ProductTypeFactory.createSchema = function (data, type) {
        switch (type) {
            case define_1["default"].STORE.FURNITURE:
                return new furniture_1["default"](data);
            case define_1["default"].STORE.AA_PET:
                return new aa_pet_1["default"](data);
            default:
                return new furniture_1["default"](data);
        }
    };
    ProductTypeFactory.getSchema = function (type) {
        switch (type) {
            case define_1["default"].STORE.FURNITURE:
                return furniture_1["default"];
            case define_1["default"].STORE.AA_PET:
                return aa_pet_1["default"];
            default:
                return furniture_1["default"];
        }
    };
    return ProductTypeFactory;
}());
exports.ProductTypeFactory = ProductTypeFactory;
