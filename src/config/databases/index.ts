import config from "..";
import MongoClient from "./mongo.client";

export const mongoConnection = new MongoClient(config.MONGO_URI).getConnection();
