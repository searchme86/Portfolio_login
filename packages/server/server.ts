import express from 'express';
const app = express();
const port = 3001;

export interface QueryPayload {
  foo: string;
}

app.get('/data', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const data: QueryPayload = { foo: 'bar' };
  res.json(data);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
