"use strict";
exports.__esModule = true;
exports.UserFactory = void 0;
var Request_1 = require("../Concreate/Furniture/Request");
var Response_1 = require("../Concreate/Furniture/Response");
var furniture_1 = require("../../models/User/furniture");
// AA-PET
var Request_2 = require("../Concreate/AA-PET/Request");
var Response_2 = require("../Concreate/AA-PET/Response");
var aa_pet_1 = require("../../models/User/aa-pet");
var define_1 = require("../../Constant/define");
var UserFactory = /** @class */ (function () {
    function UserFactory() {
    }
    UserFactory.createUser = function (data, type) {
        switch (type) {
            case define_1["default"].STORE.FURNITURE:
                return new Request_1.FurnitureUserRequest(data);
            case define_1["default"].STORE.AA_PET:
                return new Request_2.AAPetUserRequest(data);
            default:
                return new Request_1.FurnitureUserRequest(data);
        }
    };
    UserFactory.getUser = function (data, type) {
        switch (type) {
            case define_1["default"].STORE.FURNITURE:
                return new Response_1.FurnitureUserResponse(data);
            case define_1["default"].STORE.AA_PET:
                return new Response_2.AAPetUserResponse(data);
            default:
                return new Response_1.FurnitureUserResponse(data);
        }
    };
    UserFactory.createSchema = function (data, type) {
        switch (type) {
            case define_1["default"].STORE.FURNITURE:
                return new furniture_1["default"](data);
            case define_1["default"].STORE.AA_PET:
                return new aa_pet_1["default"](data);
            default:
                return new furniture_1["default"](data);
        }
    };
    UserFactory.getSchema = function (type) {
        switch (type) {
            case define_1["default"].STORE.FURNITURE:
                return furniture_1["default"];
            case define_1["default"].STORE.AA_PET:
                return aa_pet_1["default"];
            default:
                return furniture_1["default"];
        }
    };
    return UserFactory;
}());
exports.UserFactory = UserFactory;
