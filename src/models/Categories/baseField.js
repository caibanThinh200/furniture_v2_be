"use strict";
exports.__esModule = true;
exports["default"] = {
    // _id: mongoose.Types.ObjectId,
    name: {
        type: String,
        required: true
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
