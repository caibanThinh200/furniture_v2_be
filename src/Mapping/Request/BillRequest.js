"use strict";
exports.__esModule = true;
var BillRequest = /** @class */ (function () {
    function BillRequest(data) {
        this.setData(data);
    }
    BillRequest.prototype.setData = function (data) {
        this.total = ((data === null || data === void 0 ? void 0 : data.products) || []).reduce(function (i, k) { return i + k.price; }, 0) || 0;
        this.created_at = (data === null || data === void 0 ? void 0 : data.created_at) || Date.now();
    };
    return BillRequest;
}());
exports["default"] = BillRequest;
