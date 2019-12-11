import {Schema, Document, model} from 'mongoose';

export interface ILogs {
  deviceId: string;
  scannerId: string;
  dateTime: number;
}

const LogsSchema: Schema = new Schema({
    deviceId: String,
    scannerId: String,
    userId: String,
  },{
    timestamps: true
  }
);

export interface ILogsModel extends ILogs, Document {};

const LogsModel = model <ILogsModel>('Logs', LogsSchema);

export default LogsModel;