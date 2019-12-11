import {Model} from 'mongoose';
import * as UserModel from './User.Model';
import UserController from './User.Controller';

const UserCtrl = new UserController<Model<UserModel.IUserModel>>(UserModel.default);

class UserHandler {
  public static get (req: any, res: any) {
    UserCtrl.getAll(req, res);
  }

  public static post (req: any, res: any) {
    UserCtrl.insert(req, res); 
  }

  public static delete (req: any, res: any) {
    UserCtrl.delete(req, res);
  }
}

export default UserHandler
