import {Schema, Document, model} from 'mongoose';

export interface ITest {
    name: string;
    email: string;
    type: number;
}

const TestSchema: Schema = new Schema({
    name: String,
    email: String,
    type: Number,
});

export interface ITestModel extends ITest, Document {};

const TestModel = model<ITestModel>('Test', TestSchema);

export default TestModel;
