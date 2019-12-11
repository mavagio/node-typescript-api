import LogsHandler from './Logs.Handler';
import * as express from 'express';

const LogsRouter = express.Router();

LogsRouter.get('/', LogsHandler.get);
LogsRouter.post('/', LogsHandler.post);

export default LogsRouter;
