import React from 'react';
import ReactDOMServer from 'react-dom/server';

import ServerAppShell from './shell';
import template from '../document/template';

const ServerApp = React.createFactory(ServerAppShell);

const renderApplication = (url, initialState = {}) => {
  console.log("RENDERING WITH", initialState);
  const html = ReactDOMServer.renderToString(ServerApp({url: url, context: {}, initialState}));
  return template({body: html, initialState: JSON.stringify(initialState)});
};

export default renderApplication;
