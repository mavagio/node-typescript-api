import {API_PATH} from '../../config';
import UserHandler from './User.Handler';

const PATH = 'user'
const FULL_PATH =`/${API_PATH}/${PATH}/`;

export default class UserRouter {
  public static connect(api: any) {
    api.route(FULL_PATH).get(UserHandler.get);
    api.route(FULL_PATH).post(UserHandler.post);
    api.route(`${FULL_PATH}/:id`).delete(UserHandler.delete);
  }
}