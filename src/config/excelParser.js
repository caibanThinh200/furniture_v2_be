"use strict";
exports.__esModule = true;
var convert_excel_to_json_1 = require("convert-excel-to-json");
var function_1 = require("../Utils/function");
var path_1 = require("path");
var ExcelGenerator = /** @class */ (function () {
    function ExcelGenerator(data) {
        // if(!this.instance) {
        //     this.instance = new ExcelGenerator(data);
        // }
        this.data = this.setExcelData(data) || {};
    }
    ExcelGenerator.prototype.setExcelData = function (data) {
        return (0, convert_excel_to_json_1["default"])({
            sourceFile: "".concat(path_1["default"].join(__dirname, "../"), "/").concat((data === null || data === void 0 ? void 0 : data.path) || ""),
            header: {
                rows: 1
            },
            columnToKey: function_1["default"].getAlphabetObject(data === null || data === void 0 ? void 0 : data.objects)
        });
    };
    return ExcelGenerator;
}());
exports["default"] = ExcelGenerator;
