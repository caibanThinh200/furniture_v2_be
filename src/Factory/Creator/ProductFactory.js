"use strict";
exports.__esModule = true;
exports.ProductFactory = void 0;
// Furniture
var Request_1 = require("../Concreate/Furniture/Request/");
var Response_1 = require("../Concreate/Furniture/Response/");
var furniture_1 = require("../../models/Product/furniture");
// AA-PET
var Request_2 = require("../Concreate/AA-PET/Request/");
var Response_2 = require("../Concreate/AA-PET/Response/");
var aa_pet_1 = require("../../models/Product/aa-pet");
var define_1 = require("../../Constant/define");
var ProductFactory = /** @class */ (function () {
    function ProductFactory() {
    }
    ProductFactory.createProduct = function (data, type) {
        switch (type) {
            case define_1["default"].STORE.FURNITURE: return new Request_1.FurnitureProductRequest(data);
            case define_1["default"].STORE.AA_PET: return new Request_2.AAPetProductRequest(data);
            default: return new Request_1.FurnitureProductRequest(data);
        }
    };
    ProductFactory.getProduct = function (data, type) {
        switch (type) {
            case define_1["default"].STORE.FURNITURE:
                return new Response_1.FurnitureProductResponse(data);
            case define_1["default"].STORE.AA_PET:
                return new Response_2.AAPetProductResponse(data);
            default:
                return new Response_1.FurnitureProductResponse(data);
        }
    };
    ProductFactory.createSchema = function (data, type) {
        switch (type) {
            case define_1["default"].STORE.FURNITURE:
                return new furniture_1["default"](data);
            case define_1["default"].STORE.AA_PET:
                return new aa_pet_1["default"](data);
            default:
                return new furniture_1["default"](data);
        }
    };
    ProductFactory.getSchema = function (type) {
        switch (type) {
            case define_1["default"].STORE.FURNITURE:
                return furniture_1["default"];
            case define_1["default"].STORE.AA_PET:
                return aa_pet_1["default"];
            default:
                return furniture_1["default"];
        }
    };
    return ProductFactory;
}());
exports.ProductFactory = ProductFactory;
