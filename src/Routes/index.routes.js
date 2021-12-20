"use strict";
exports.__esModule = true;
var Product_routes_1 = require("./Product.routes");
var Auth_routes_1 = require("./Auth.routes");
var Category_routes_1 = require("./Category.routes");
var SocialMedia_routes_1 = require("./SocialMedia.routes");
var Bill_routes_1 = require("./Bill.routes");
var ProductType_routes_1 = require("./ProductType.routes");
var Accessory_routes_1 = require("./Accessory.routes");
var url_1 = require("../Constant/url");
exports["default"] = (function (app) {
    app.use(url_1["default"].PRODUCT.baseURL, Product_routes_1["default"]);
    app.use(url_1["default"].PRODUCT_TYPE.baseURL, ProductType_routes_1["default"]);
    app.use(url_1["default"].CATEGORY.baseURL, Category_routes_1["default"]);
    app.use(url_1["default"].AUTH.baseURL, Auth_routes_1["default"]);
    app.use(url_1["default"].SOCIAL_MEDIA.baseURL, SocialMedia_routes_1["default"]);
    app.use(url_1["default"].BILL.baseURL, Bill_routes_1["default"]);
    app.use(url_1["default"].ACCESSORY.baseURL, Accessory_routes_1["default"]);
});
