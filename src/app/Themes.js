import React from 'react';

export default class Themes extends React.Component {
  render() {
    const { status, data } = this.props;
    return (
      <React.Fragment>
        <h4>The themes we have</h4>
        { status === 'initial' ? 'nothing!' : status === 'loading' ? '...loading...' : status === 'error' ? 'OH NO :/' : (
          <ul>
            {data.map( t => <li key={t.name}>{t.name}</li> )}
          </ul>
        )}
        <p>This is an awesome page! :D</p>
      </React.Fragment>
    );
  }
}
