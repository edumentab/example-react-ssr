var express = require('express')
var app = express();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const path = require('path');

// React App
const bundledCode = require('./server.bundle.js').default;


const ServerApp = React.createFactory(bundledCode.ServerAppShell);
const template = require('./template');

// Helper function to get the markup from React, inject the initial state, and
// send the server-side markup to the client
const renderApplication = (url, initialState = {}) => {
  const html = ReactDOMServer.renderToString(ServerApp({url: url, context: {}, initialState}));
  return template({body: html, initialState: JSON.stringify(initialState)});
};

app.get('/favicon.ico', (req, res) => res.sendStatus(204));

app.use('/assets', express.static(path.join(__dirname, '../../public/assets')));

app.get('/preloaded', (req, res) => {
  return bundledCode.rebrickable.getSetsForTheme(199)
    .then(sets => res.send(renderApplication(req.url, {preloaded: sets})))
    .catch(e => {
      console.log('ERROR :/', e);
      res.send(renderApplication(req.url, {preloaded: e}));  
    });
});

app.get('*', (req, res) => {
  console.log('serving', req.url);
  res.send(renderApplication(req.url, {foo: 'BAR'}));
});

app.listen(8888);

console.log("Backend server starting!");


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