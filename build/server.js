"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const Dontenv = require("dotenv");
const router_1 = require("./api/router");
const Mongoose_Service_1 = require("./api/datasources/Mongoose.Service");
class Server {
    static boot() {
        Dontenv.config();
        const PORT = process.env.PORT || 3000;
        const API = Server.startExpressApi();
        Mongoose_Service_1.default.connect();
        router_1.default.connect(API);
        API.listen(PORT);
        console.info('RESTful API server started on: ' + PORT);
        return API;
    }
    static startExpressApi() {
        const API = express();
        API.use(morgan('dev'));
        API.use(cookieParser());
        API.use(bodyParser.urlencoded({ extended: true }));
        API.use(bodyParser.json());
        return API;
    }
}
exports.default = Server;
