"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("../endpoints/test");
const logs_1 = require("../endpoints/logs");
class Router {
    static connect(api) {
        test_1.TestRouter.connect(api);
        logs_1.LogsRouter.connect(api);
        this._connect(api);
    }
    static _connect(api) {
        api.route('/').get((req, res) => res.sendStatus(200));
        api.route('/**').get((req, res) => res.sendStatus(200));
    }
}
;
exports.default = Router;
