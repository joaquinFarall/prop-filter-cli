import mongoose from 'mongoose';
import logger from '../../utils/logger';

export default class MongoClient {
  private readonly connection: mongoose.Connection;

  constructor(uri: string, options?: mongoose.ConnectOptions) {
    this.connection = mongoose.createConnection(uri, options);
  }

  getConnection = (): mongoose.Connection => this.connection;
}
