import * as mongoose from 'mongoose';
import {PROD_VAR} from '../config';

class MongooseService {
  private static getUri(): string {
    return String((process.env.NODE_ENV === PROD_VAR) ? process.env.PROD_DB : process.env.DEV_DB);
  }

  public static connect() {
    mongoose.connect(MongooseService.getUri(), {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  }
}

export default MongooseService;