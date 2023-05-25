import express from 'express';
import { Request, Response } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import 'dotenv/config';
import userRoutes from './route/usersRoute';

console.log('여기는 appfff');
export interface QueryPayload {
  foo: string;
}

const app = express();

//pass incoming data
app.use(express.json());

// const proxyOptions = {
//   target: 'http://localhost:3030',
//   changeOrigin: true,
// };
// const customProxy = createProxyMiddleware(proxyOptions);

app.use(express.urlencoded({ extended: true }));

//routes
app.use('/', userRoutes);

// app.get('/data', customProxy, (req: Request, res: Response) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   const data: QueryPayload = { foo: 'bar' };
//   res.json(data);
// });

export default app;
