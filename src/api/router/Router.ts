import {TestRouter} from '../endpoints/test';
import {LogsRouter} from '../endpoints/logs';

class Router {
    public static connect(api: any) {
        TestRouter.connect(api);
        LogsRouter.connect(api);
        this._connect(api);
    }

    private static _connect(api: any) {
        api.route('/').get((req:any, res: any) => res.sendStatus(200));
        api.route('/**').get((req:any, res: any) => res.sendStatus(200));
    }
};

export default Router;
