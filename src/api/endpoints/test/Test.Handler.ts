import {Model} from 'mongoose';
import * as testModel from './Test.Model';
import TestController from './Test.Controller';

const testCtrl = new TestController<Model<testModel.ITestModel>>(testModel.default);

class TestHandler {
  public static get (req: any, res: any) {
    testCtrl.getAll(req, res);
  }

  public static post (req: any, res: any) {
    testCtrl.insert(req, res); 
  }

  public static delete (req: any, res: any) {
    testCtrl.delete(req, res);
  }
}

export default TestHandler
