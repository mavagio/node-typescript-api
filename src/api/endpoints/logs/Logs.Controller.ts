import MongooseController from '../../datasources/Mongoose.Controller';

export default class LogsController<T extends any> extends MongooseController<T> {
    constructor(model: T) {
        super(model);
    }
}
