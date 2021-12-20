"use strict";
exports.__esModule = true;
exports.UserModel = void 0;
var UserModel = /** @class */ (function () {
    function UserModel(data) {
        this.setData(data);
    }
    UserModel.prototype.setData = function (data) {
        this.name = (data === null || data === void 0 ? void 0 : data.name) || "";
        this.email = (data === null || data === void 0 ? void 0 : data.email) || "";
        this.password = (data === null || data === void 0 ? void 0 : data.password) || "";
        this.address = (data === null || data === void 0 ? void 0 : data.address) || "";
        this.phone = (data === null || data === void 0 ? void 0 : data.phone) || "";
        this.gender = (data === null || data === void 0 ? void 0 : data.gender) || "Male";
        this.created_at = (data === null || data === void 0 ? void 0 : data.created_at) || Date.now();
        this.updated_at = (data === null || data === void 0 ? void 0 : data.updated_at) || null;
    };
    return UserModel;
}());
exports.UserModel = UserModel;
