import {UserRouter} from '../endpoints/user';
import {LogsRouter} from '../endpoints/logs';

class Router {
    public static connect(api: any) {
        UserRouter.connect(api);
        LogsRouter.connect(api);
        this._connect(api);
    }

    private static _connect(api: any) {
        api.route('/').get((req:any, res: any) => res.sendStatus(200));
        api.route('/**').get((req:any, res: any) => res.sendStatus(404));
    }
};

export default Router;
