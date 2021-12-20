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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.CategorySchema = void 0;
var mongoose_1 = require("mongoose");
var define_1 = require("../../Constant/define");
var baseField_1 = require("./baseField");
var function_1 = require("../../Utils/function");
var mongoose_data_tree_1 = require("mongoose-data-tree");
var FurnitureCategoryField = __assign(__assign({}, baseField_1["default"]), { _id: mongoose_1.Schema.Types.ObjectId, code: {
        require: true,
        type: String
    }, childCate: {
        type: []
    }, name: {
        type: String,
        unique: false
    }, products: {
        type: [mongoose_1.Schema.Types.ObjectId],
        ref: function_1["default"].getStoreSchema(define_1["default"].SCHEMA.PRODUCT, define_1["default"].STORE.FURNITURE)
    } });
var CompositeCategory = /** @class */ (function (_super) {
    __extends(CompositeCategory, _super);
    function CompositeCategory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CompositeCategory.prototype.AddChildCate = function (rootCategory, child, nodeId) {
        var _this = this;
        if (rootCategory._id.equals(nodeId)) {
            rootCategory.child_cate.push(child);
            // console.log(rootCategory);
            return;
        }
        else {
            rootCategory.child_cate.forEach(function (item) {
                _this.AddChildCate(item, child, nodeId);
            });
        }
    };
    // RemoveChildCate(rootCategory, nodeId): void {
    //     if (rootCategory._id.equals(nodeId)) {
    //         logger.info('success')
    //         rootCategory.child_cate = rootCategory.child_cate.filter(item => item._id !== nodeId);
    //         console.log(rootCategory);
    //         return;
    //     } else {
    //         rootCategory.child_cate.forEach((item) => {
    //             this.RemoveChildCate(item, nodeId);
    //         });
    //     }
    // }
    CompositeCategory.prototype.FindChild = function (rootCategory, nodeId) {
        var _this = this;
        var result = null;
        if (rootCategory._id.equals(nodeId)) {
            return rootCategory.child_cate;
        }
        else {
            rootCategory.child_cate.forEach(function (item) {
                result = _this.FindChild(item, nodeId);
            });
        }
        return result;
    };
    return CompositeCategory;
}(mongoose_1.Model));
exports.CategorySchema = new mongoose_1.Schema(__assign({}, FurnitureCategoryField), { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } });
exports.CategorySchema.loadClass(CompositeCategory);
exports.CategorySchema.add({
    childCate: { type: [new mongoose_1.Schema(FurnitureCategoryField)], "default": [] }
});
exports.CategorySchema.plugin(mongoose_data_tree_1["default"]);
var CategoryModel = (0, mongoose_1.model)(function_1["default"].getStoreSchema(define_1["default"].SCHEMA.CATEGORY, define_1["default"].STORE.FURNITURE), exports.CategorySchema);
exports["default"] = CategoryModel;
