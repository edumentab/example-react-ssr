import React from 'react';

export default class Themes extends React.Component {
  render() {
    const { status, data, error, loadThemes } = this.props;
    return (
      <React.Fragment>
        <h4>The themes we have</h4>
        { status !== 'fetched' ? (
          <React.Fragment>
            <button onClick={loadThemes} disabled={status === 'loading'}>{status === 'initial' ?  'Ladda' : '...loading...'}</button>
            { status === 'error' && <span>Oh no!! {error}</span>}
          </React.Fragment>
        ) : (
          <ul>
            {data.map( t => <li key={t.name}>{t.name}</li> )}
          </ul>
        )}
        <p>This is an awesome page! :D</p>
      </React.Fragment>
    );
  }
}
