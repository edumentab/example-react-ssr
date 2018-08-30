import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Shell from './shell';
import template from '../document/template';

const renderApplication = (url, initialState = {}) => {
  console.log("Rendering app with this state:", initialState);
  const html = ReactDOMServer.renderToString(<Shell url={url} initialState={initialState}/>);
  return template({body: html, initialState: JSON.stringify(initialState)});
};

export default renderApplication;
