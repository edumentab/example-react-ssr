var express = require('express')
var app = express();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const path = require('path');

import ServerAppShell from './shell';
import rebrickable from '../services/rebrickable';


const ServerApp = React.createFactory(ServerAppShell);
const template = require('../document/template');

// Helper function to get the markup from React, inject the initial state, and
// send the server-side markup to the client
const renderApplication = (url, initialState = {}) => {
  const html = ReactDOMServer.renderToString(ServerApp({url: url, context: {}, initialState}));
  return template({body: html, initialState: JSON.stringify(initialState)});
};

app.get('/favicon.ico', (req, res) => res.sendStatus(204));

app.use('/assets', express.static(path.join(__dirname, '../../public/assets')));

app.use(function (req, res, next) {
  console.log('Handling request for', req.url);
  next();
});

app.get('/preloaded', (req, res) => {
  return rebrickable.getSetsForTheme(199)
    .then(sets => res.send(renderApplication(req.url, {preloaded: sets})))
    .catch(e => {
      console.log('ERROR :/', e);
      res.send(renderApplication(req.url, {preloaded: e}));  
    });
});

app.get('*', (req, res) => {
  res.send(renderApplication(req.url, {foo: 'BAR'}));
});

app.listen(8888);

console.log("Backend server listening at", 8888);


/*
app.get('*', async (req, res) => {
  res.set('Cache-Control', 'public, max-age=60, s-maxage=180');
  if (req.params.userId) {
    // client is requesting user-details page with userId
    // load the data for that employee and its direct reports
    const resp = await database.getEmployeeById(req.params.userId);
    res.send(renderApplication(req.url, resp));
  } else {
    // index page. load data for all employees
    const resp = await database.getAllEmployees();
    res.send(renderApplication(req.url, resp));
  }
});
*/