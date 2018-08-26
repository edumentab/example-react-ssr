import path from 'path';
import express from 'express';

import rebrickable from '../services/rebrickable';
import renderApplication from './renderApp';

const server = express();

server.get('/favicon.ico', (req, res) => res.sendStatus(204));

server.use('/assets', express.static(path.join(__dirname, '../../public/assets')));

server.use(function (req, res, next) {
  console.log('Handling request for', req.url);
  next();
});

server.get('/preloaded', (req, res) => {
  return rebrickable.getSetsForTheme(199)
    .then(sets => res.send(renderApplication(req.url, {preloaded: sets})))
    .catch(e => {
      console.log('ERROR :/', e);
      res.send(renderApplication(req.url, {preloaded: e}));  
    });
});

server.get('*', (req, res) => {
  res.send(renderApplication(req.url, {foo: 'BAR'}));
});

server.listen(8888);

console.log("Backend server listening at", 8888);
