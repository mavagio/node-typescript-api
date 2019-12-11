import {API_PATH} from '../../config';
import LogsHandler from './Logs.Handler';

const PATH = 'Logs'
const FULL_PATH =`/${API_PATH}/${PATH}/`;

export default class LogsRouter {
  public static connect(api: any) {
    api.route(FULL_PATH).get(LogsHandler.get);
    api.route(FULL_PATH).post(LogsHandler.post);
  }
}