import {Schema, Document, model} from 'mongoose';

export interface IUser {
    name: string;
    email: string;
    type: number;
}

const UserSchema: Schema = new Schema({
    name: String,
    email: String,
    type: Number,
});

export interface IUserModel extends IUser, Document {};

const UserModel = model<IUserModel>('User', UserSchema);

export default UserModel;
