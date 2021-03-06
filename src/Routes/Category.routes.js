"use strict";
exports.__esModule = true;
var express_1 = require("express");
var url_1 = require("../Constant/url");
var Category_controller_1 = require("../Controller/Category.controller");
var multer_1 = require("../Config/multer");
var route = express_1["default"].Router();
route.post(url_1["default"].CATEGORY.child, Category_controller_1["default"].AddChildCateController);
route.post(url_1["default"].APP.start, multer_1["default"].single("category"), Category_controller_1["default"].AddCategoryController);
route.get(url_1["default"].APP.start, Category_controller_1["default"].GetListCategoryController);
route.get(url_1["default"].CATEGORY.detailChild, Category_controller_1["default"].GetDetailChildController);
route.get(url_1["default"].APP.params.replace("params", "id"), Category_controller_1["default"].GetDetailCategoryController);
route.put(url_1["default"].APP.params.replace("params", "id"), Category_controller_1["default"].UpdateCategoryController);
route["delete"](url_1["default"].APP.params.replace("params", "id"), Category_controller_1["default"].DeleteCategoryController);
// route.delete(PATH.CATEGORY.deleteChild, CategoryController.RemoveChildCateController);
exports["default"] = route;
