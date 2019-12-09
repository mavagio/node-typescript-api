"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../config");
const Test_Handler_1 = require("./Test.Handler");
const PATH = 'test';
const FULL_PATH = `/${config_1.API_PATH}/${PATH}/`;
class TestRouter {
    static connect(api) {
        api.route(FULL_PATH).get(Test_Handler_1.default.get);
        api.route(FULL_PATH).post(Test_Handler_1.default.post);
        api.route(`${FULL_PATH}/:id`).delete(Test_Handler_1.default.delete);
    }
}
exports.default = TestRouter;
