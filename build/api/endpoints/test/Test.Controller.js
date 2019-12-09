"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mongoose_Controller_1 = require("../../datasources/Mongoose.Controller");
class TestController extends Mongoose_Controller_1.default {
    constructor(model) {
        super(model);
    }
    insert(req, res) {
        const obj = new this.model(req.body);
        obj.save((err, item) => {
            if (err) {
                return console.error(err);
            }
            res.status(200).json(item);
        });
    }
}
exports.default = TestController;
