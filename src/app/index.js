import React from 'react';

export default class App extends React.Component {
  componentDidMount() {
    console.log("PROPS", this.props);
  }
  render() {
    return (
      <div>Hello!</div>
    );
  }
}
