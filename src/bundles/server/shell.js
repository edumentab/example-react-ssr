import React from 'react';
import { StaticRouter } from 'react-router-dom';
import App from '../../app';

export default class ServerAppShell extends React.Component {
  render() {
    return (
      <StaticRouter location={this.props.url} context={this.props.context}>
        <App state={this.props.initialState} />
      </StaticRouter>
    );
  }
}
