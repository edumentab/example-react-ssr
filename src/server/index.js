import path from 'path';
import express from 'express';

import rebrickable from '../services/rebrickable';
import renderApplication from './renderApp';

const server = express();

server.get('/favicon.ico', (req, res) => res.sendStatus(204));

server.get('/preloaded', (req, res) => {
  return rebrickable.getSetsForTheme(199)
    .then(sets => res.send(renderApplication(req.url, {preloaded: sets})))
    .catch(e => {
      console.log('ERROR :/', e);
      res.send(renderApplication(req.url, {preloaded: e}));  
    });
});

server.get(/^\/(?!assets)/i, (req, res) => {
  console.log('non!', req.url);
  res.send(renderApplication(req.url, {foo: 'BAR'}));
});

server.use('/assets', express.static(__dirname + '/../../public/assets'));

server.listen(8888);

console.log("Backend server v2 listening at", 8888);
