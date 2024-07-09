import express from 'express';

import { featured_blogs } from './server';

const app = express();
const port = 3001;

app.get('/featured-blogs', (_, res) => {
  res.send(JSON.stringify({ data: featured_blogs, status: true }));
});

app.get;

app.listen(port, () => {
  console.log(`Mock server is listening on port ${port}`);
});
