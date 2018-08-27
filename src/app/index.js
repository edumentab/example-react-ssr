import React from 'react';

import Master from './master/Master';

export default class App extends React.Component {
  componentDidMount() {
    console.log("Render site with props:", this.props);
  }
  render() {
    return (
      <Master/>
    );
  }
}
