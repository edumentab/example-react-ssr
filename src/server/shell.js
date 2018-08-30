import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../app';
import initiateStore from '../store';

export default class ServerAppShell extends React.Component {
  render() {
    const store = initiateStore(this.props.initialState);
    return (
      <StaticRouter location={this.props.url}>
        <Provider store={store}>
          <App />
        </Provider>
      </StaticRouter>
    );
  }
}
