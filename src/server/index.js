import path from 'path';
import express from 'express';

import rebrickable from '../services/rebrickable';
import renderApplication from './renderApp';

const server = express();

server.get('/favicon.ico', (req, res) => res.sendStatus(204));

server.use(function (req, res, next) {
  console.log('Received request', req.url);
  next();
});

server.use('/assets', express.static(path.join(__dirname + '/../../public/assets')));

server.get('/preloaded', (req, res) => {
  return rebrickable.getSetsForTheme(199)
    .then(result => res.send(renderApplication(req.url, {preloaded: result.data})))
    .catch(e => {
      console.log('ERROR :/', e);
      res.send(renderApplication(req.url, {preloaded: e}));  
    });
});

server.get('*', (req, res) => {
  res.send(renderApplication(req.url, {foo: 'BAR'}));
});

server.listen(8888);

console.log("Backend server v2 listening at", 8888);
