import mongoose from 'mongoose';
import 'dotenv/config';

export const connectToDB = async (callback: (error?: Error) => void) => {
  try {
    if (process.env.MONGO_URL) {
      const DBConnected = await mongoose.connect(process.env.MONGO_URL);
      callback();
      mongoose.set('strictQuery', true);
      console.log(
        `Mongoose connection SuccessFul, host: ${DBConnected.connection.host}`
      );
    }
  } catch (error) {
    if (error instanceof Error) {
      callback(error);
      console.log('Mongoose Connection Error!', error);
    }
  }
};

const handleConnecting = () =>
  console.log('Attempting to connect to the database...');
const handleOpen = () => console.log('Connected to DB!');
const handleError = (error: Error) => console.log('DB Error happened', error);
const handleDisconnection = () => console.log('Disconnected from the DB');
const handleReconnection = () => console.log('reconnected from the DB');

const db = mongoose.connection;

db.on('connecting', handleConnecting);
db.once('open', handleOpen);
db.on('error', handleError);
db.on('disconnected', handleDisconnection);
db.on('reconnected', handleReconnection);
