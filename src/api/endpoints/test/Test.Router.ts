import {API_PATH} from '../../config';
import TestHandler from './Test.Handler';

const PATH = 'test'
const FULL_PATH =`/${API_PATH}/${PATH}/`;

export default class TestRouter {
  public static connect(api: any) {
    api.route(FULL_PATH).get(TestHandler.get);
    api.route(FULL_PATH).post(TestHandler.post);
    api.route(`${FULL_PATH}/:id`).delete(TestHandler.delete);
  }
}