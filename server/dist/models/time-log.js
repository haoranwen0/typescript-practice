"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const timeLogSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    start: {
        type: String,
        required: true,
    },
    end: {
        type: String,
        required: true,
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("TimeLog", timeLogSchema);
