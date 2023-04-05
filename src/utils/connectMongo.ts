import Mongoose from "mongoose";

const mongoUrl = process.env.MONGO_URL as string;

export const ConnectMongo = async () => await Mongoose.connect(mongoUrl);

export const CloseConnection = async () => await Mongoose.connection.close();
