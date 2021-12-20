"use strict";
exports.__esModule = true;
exports.BillResponse = void 0;
var BillResponse = /** @class */ (function () {
    function BillResponse(data) {
        this.setData(data);
    }
    BillResponse.prototype.setData = function (data) {
        this._id = (data === null || data === void 0 ? void 0 : data._id.toString()) || "";
        this.total = (data === null || data === void 0 ? void 0 : data.total) || "";
        this.created_at = (data === null || data === void 0 ? void 0 : data.created_at) || Date.now();
    };
    return BillResponse;
}());
exports.BillResponse = BillResponse;
