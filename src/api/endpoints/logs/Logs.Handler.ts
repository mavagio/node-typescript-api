import {Model} from 'mongoose';
import * as LogsModel from './Logs.Model';
import LogsController from './Logs.Controller';

const LogsCtrl = new LogsController<Model<LogsModel.ILogsModel>>(LogsModel.default);

class LogsHandler {
  public static get (req: any, res: any) {
    LogsCtrl.getAll(req, res);
  }

  public static post (req: any, res: any) {
    LogsCtrl.insert(req, res); 
  }
}

export default LogsHandler
