"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testModel = require("./Test.Model");
const Test_Controller_1 = require("./Test.Controller");
const testCtrl = new Test_Controller_1.default(testModel.default);
class TestHandler {
    static get(req, res) {
        testCtrl.getAll(req, res);
    }
    static post(req, res) {
        testCtrl.insert(req, res);
    }
    static delete(req, res) {
        testCtrl.delete(req, res);
    }
}
exports.default = TestHandler;
