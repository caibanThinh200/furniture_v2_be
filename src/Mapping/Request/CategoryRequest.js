"use strict";
exports.__esModule = true;
var CategoryRequest = /** @class */ (function () {
    function CategoryRequest(data) {
        this.setData(data);
    }
    CategoryRequest.prototype.setData = function (data) {
        this.name = (data === null || data === void 0 ? void 0 : data.name) || "";
        this.created_at = (data === null || data === void 0 ? void 0 : data.created_at) || Date.now();
        this.updated_at = (data === null || data === void 0 ? void 0 : data.updated_at) || null;
    };
    return CategoryRequest;
}());
exports["default"] = CategoryRequest;
