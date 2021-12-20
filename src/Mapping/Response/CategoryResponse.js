"use strict";
exports.__esModule = true;
exports.CategoryResponse = void 0;
var CategoryResponse = /** @class */ (function () {
    function CategoryResponse(data) {
        this.setData(data);
    }
    CategoryResponse.prototype.setData = function (data) {
        this._id = (data === null || data === void 0 ? void 0 : data._id.toString()) || "";
        this.name = (data === null || data === void 0 ? void 0 : data.name) || "";
        this.created_at = (data === null || data === void 0 ? void 0 : data.created_at) || null;
        this.updated_at = (data === null || data === void 0 ? void 0 : data.updated_at) || null;
    };
    return CategoryResponse;
}());
exports.CategoryResponse = CategoryResponse;
