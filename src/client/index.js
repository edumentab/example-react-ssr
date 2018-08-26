import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from '../app';
import initiateStore from '../store';
import defaultState from '../store/defaultState';

const store = initiateStore(window.__initialState || defaultState);

ReactDOM.render((
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>
  ), document.getElementById('root')
);
