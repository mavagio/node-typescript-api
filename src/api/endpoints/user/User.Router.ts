import UserHandler from './User.Handler';
import * as express from 'express';

const UserRouter = express.Router();
UserRouter.get('/', UserHandler.get);
UserRouter.post('/', UserHandler.post);
UserRouter.delete('/:id', UserHandler.delete);

export default UserRouter;
