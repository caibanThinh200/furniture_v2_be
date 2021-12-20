"use strict";
exports.__esModule = true;
exports.AccessoryFactory = void 0;
var define_1 = require("../../Constant/define");
var accessory_1 = require("../Concreate/Furniture/Request/accessory");
var accessory_2 = require("../Concreate/Furniture/Response/accessory");
var furniture_1 = require("../../models/Accessory/furniture");
//AA-PET
var accessory_3 = require("../Concreate/AA-PET/Request/accessory");
var accessory_4 = require("../Concreate/AA-PET/Response/accessory");
var aa_pet_1 = require("../../models/Accessory/aa-pet");
var AccessoryFactory = /** @class */ (function () {
    function AccessoryFactory() {
    }
    AccessoryFactory.createAccessory = function (data, type) {
        switch (type) {
            case define_1["default"].STORE.FURNITURE: return new accessory_1["default"](data);
            case define_1["default"].STORE.AA_PET: return new accessory_3["default"](data);
            default: return new accessory_1["default"](data);
        }
    };
    AccessoryFactory.getAccessory = function (data, type) {
        switch (type) {
            case define_1["default"].STORE.FURNITURE: return new accessory_2["default"](data);
            case define_1["default"].STORE.AA_PET: return new accessory_4["default"](data);
            default: return new accessory_2["default"](data);
        }
    };
    AccessoryFactory.createSchema = function (data, type) {
        switch (type) {
            case define_1["default"].STORE.FURNITURE: return new furniture_1["default"](data);
            case define_1["default"].STORE.AA_PET: return new aa_pet_1["default"](data);
            default: return new furniture_1["default"](data);
        }
    };
    AccessoryFactory.getSchema = function (type) {
        switch (type) {
            case define_1["default"].STORE.FURNITURE: return furniture_1["default"];
            case define_1["default"].STORE.AA_PET: return aa_pet_1["default"];
            default: return furniture_1["default"];
        }
    };
    return AccessoryFactory;
}());
exports.AccessoryFactory = AccessoryFactory;
