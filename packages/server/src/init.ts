import app from './server';
import 'dotenv/config';
import { connectToDB } from './db';

const PORT = process.env.PORT || 4000;

const handleListening = () => {
  console.log(`====server is listening on ${PORT}====`);
};

console.log('여기는 init.ts');

connectToDB((error?: Error) => {
  if (!error) {
    app.listen(PORT, handleListening);
  }
});
