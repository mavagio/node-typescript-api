"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MongooseController {
    constructor(model) {
        this.model = model;
    }
    getAll(req, res) {
        this.model.find({}, (err, docs) => {
            if (err) {
                return console.error(err);
            }
            res.json(docs);
        });
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
    delete(req, res) {
        this.model.findOneAndRemove({ _id: req.params.id }, (err, obj) => {
            if (err) {
                return console.error(err);
            }
            res.sendStatus(200);
        });
    }
    deleteAll(req, res) {
        this.model.remove({}, (err) => {
            if (err) {
                return console.error(err);
            }
            res.sendStatus(200);
        });
    }
    update(req, res) {
        this.model.findOneAndUpdate({ id: req.params.id }, req.body, (err) => {
            if (err) {
                return console.error(err);
            }
            res.sendStatus(200);
        });
    }
    get(req, res) {
        this.model.findOne({ entryId: req.params.entryId }, (err, obj) => {
            if (err) {
                return console.error(err);
            }
            res.json(obj);
        });
    }
}
exports.default = MongooseController;
