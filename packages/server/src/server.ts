import express from 'express';
import { Request, Response } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import 'dotenv/config';

console.log('여기는 app');
export interface QueryPayload {
  foo: string;
}

const app = express();

const proxyOptions = {
  target: 'http://localhost:3001',
  changeOrigin: true,
};
const customProxy = createProxyMiddleware(proxyOptions);

app.get('/data', customProxy, (req: Request, res: Response) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const data: QueryPayload = { foo: 'bar' };
  res.json(data);
});

export default app;
