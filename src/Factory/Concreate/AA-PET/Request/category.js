"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var CategoryRequest_1 = require("../../../../Mapping/Request/CategoryRequest");
var AAStoreRequest = /** @class */ (function (_super) {
    __extends(AAStoreRequest, _super);
    function AAStoreRequest(data) {
        var _this = _super.call(this, data) || this;
        _this.setAAStoreData(data);
        return _this;
    }
    AAStoreRequest.prototype.setAAStoreData = function (data) {
        this.setData(data);
        this._id = new mongoose_1["default"].Types.ObjectId();
        this.child_cate =
            ((data === null || data === void 0 ? void 0 : data.child_cate) || []).map(function (item) { return new AAStoreRequest(item); }) ||
                [];
    };
    return AAStoreRequest;
}(CategoryRequest_1["default"]));
exports["default"] = AAStoreRequest;
