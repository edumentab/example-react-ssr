import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home';
import Error404 from './404';

export default class App extends React.Component {
  componentDidMount() {
    console.log("PROPS", this.props);
  }
  render() {
    return (
      <Switch>
        <Route path='/' exact component={Home} />
        <Route component={Error404} />
      </Switch>
    );
  }
}
