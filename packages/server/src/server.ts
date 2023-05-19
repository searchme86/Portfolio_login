import express from 'express';
import { Request, Response } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();
const port = 3001;

export interface QueryPayload {
  foo: string;
}

const proxyOptions = {
  target: 'http://localhost:3001',
  changeOrigin: true,
};
const customProxy = createProxyMiddleware(proxyOptions);

console.log('HELLO WORLD');

app.get('/data', customProxy, (req: Request, res: Response) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const data: QueryPayload = { foo: 'bar' };
  res.json(data);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
