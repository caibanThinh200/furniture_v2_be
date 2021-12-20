"use strict";
exports.__esModule = true;
exports.ProductTypeBaseField = void 0;
exports.ProductTypeBaseField = {
    name: {
        type: String,
        required: true,
        unique: true
    },
    created_at: {
        type: Date,
        "default": Date.now()
    },
    updated_at: {
        type: Date,
        "default": null
    }
};
