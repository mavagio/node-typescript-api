"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const config_1 = require("../config");
class MongooseService {
    static getUri() {
        return String((process.env.NODE_ENV === config_1.PROD_VAR) ? process.env.PROD_DB : process.env.DEV_DB);
    }
    static connect() {
        mongoose.connect(MongooseService.getUri(), {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    }
}
exports.default = MongooseService;
