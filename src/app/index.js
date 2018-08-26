import React from 'react';

import Master from './master';

export default class App extends React.Component {
  componentDidMount() {
    console.log("PROPS", this.props);
  }
  render() {
    return (
      <Master/>
    );
  }
}
