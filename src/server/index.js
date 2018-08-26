import path from 'path';
import express from 'express';

import rebrickable from '../services/rebrickable';
import renderApplication from './renderApp';

import defaultState from '../store/defaultState';

const server = express();

server.get('/favicon.ico', (req, res) => res.sendStatus(204));

server.use(function (req, res, next) {
  console.log('Received request', req.url);
  next();
});

server.use('/assets', express.static(path.join(__dirname + '/../../public/assets')));

server.get('/themes', (req, res) => {
  console.log('prefilling theme list for path', req.url);
  return rebrickable.getThemesByParent(186)
    .then(result => res.send(renderApplication(req.url, {...defaultState, themes: {data: result.data, status: 'fetched'}})))
    .catch(e => {
      console.log('ERROR :/', e);
      res.send(renderApplication(req.url, {...defaultState, themes: e}));
    });
});

server.get('*', (req, res) => {
  res.send(renderApplication(req.url, defaultState));
});

server.listen(8888);

console.log("Backend server v2 listening at", 8888);
