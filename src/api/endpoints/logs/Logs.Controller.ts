import MongooseController from '../../datasources/Mongoose.Controller';

export default class TestController<T extends any> extends MongooseController<T> {
    constructor(model: T) {
        super(model);
    }
}
