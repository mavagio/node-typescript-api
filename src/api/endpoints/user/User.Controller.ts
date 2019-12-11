import MongooseController from '../../datasources/Mongoose.Controller';

export default class UserController<T extends any> extends MongooseController<T> {
    constructor(model: T) {
        super(model);
    }

    public insert(req: any, res: any) {
        const obj = new this.model(req.body);
        obj.save((err: any, item: any) => {
            if (err) {
                return console.error(err);
            }
            res.status(200).json(item);
        });
    }
}
