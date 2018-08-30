import path from 'path';
import express from 'express';

import handleThemes from './routes/themes';
import handleDefault from './routes/default';

const server = express();

server.use('/assets', express.static(path.join(__dirname + '/www/assets')));
server.use((req, res, next) => {
  console.log('Received request', req.url);
  next();
});

server.get('/favicon.ico', (req, res) => res.sendStatus(204));
server.get('/themes', handleThemes);
server.get('*', handleDefault);

server.listen(8888);
console.log("Backend server listening at", 8888);
