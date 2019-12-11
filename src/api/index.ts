import {UserRouter} from './endpoints/user';
import {LogsRouter} from './endpoints/logs';
import * as express from 'express';

const Router = express.Router();

Router.use('/user', UserRouter);
Router.use('/logs', LogsRouter);

Router.get('/', (req:any, res: any) => res.sendStatus(200));
Router.get('/**', (req:any, res: any) => res.sendStatus(404));

export default Router;
