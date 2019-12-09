"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TestSchema = new mongoose_1.Schema({
    name: String,
    email: String,
    type: Number,
});
;
const TestModel = mongoose_1.model('Test', TestSchema);
exports.default = TestModel;
