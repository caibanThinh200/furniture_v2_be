"use strict";
exports.__esModule = true;
var bill_1 = require("../Concreate/Furniture/Request/bill");
var bill_2 = require("../Concreate/Furniture/Response/bill");
var furniture_1 = require("../../models/Bill/furniture");
// AA-store
var bill_3 = require("../Concreate/AA-PET/Request/bill");
var bill_4 = require("../Concreate/AA-PET/Response/bill");
var aa_pet_1 = require("../../models/Bill/aa-pet");
var define_1 = require("../../Constant/define");
var BillFactory = /** @class */ (function () {
    function BillFactory() {
    }
    BillFactory.createBill = function (data, type) {
        switch (type) {
            case define_1["default"].STORE.FURNITURE:
                return new bill_1["default"](data);
            case define_1["default"].STORE.AA_PET:
                return new bill_3["default"](data);
            default:
                return new bill_1["default"](data);
        }
    };
    BillFactory.getBill = function (data, type) {
        switch (type) {
            case define_1["default"].STORE.FURNITURE:
                return new bill_2["default"](data);
            case define_1["default"].STORE.AA_PET:
                return new bill_4["default"](data);
            default:
                return new bill_2["default"](data);
        }
    };
    BillFactory.createSchema = function (data, type) {
        switch (type) {
            case define_1["default"].STORE.FURNITURE:
                return new furniture_1["default"](data);
            case define_1["default"].STORE.AA_PET:
                return new aa_pet_1["default"](data);
            default:
                return new furniture_1["default"](data);
        }
    };
    BillFactory.getSchema = function (type) {
        switch (type) {
            case define_1["default"].STORE.FURNITURE:
                return furniture_1["default"];
            case define_1["default"].STORE.AA_PET:
                return aa_pet_1["default"];
            default:
                return furniture_1["default"];
        }
    };
    return BillFactory;
}());
exports["default"] = BillFactory;
