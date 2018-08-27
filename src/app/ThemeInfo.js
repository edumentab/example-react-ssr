import React from 'react';

import { Link } from 'react-router-dom';

export default class ThemeInfo extends React.Component {
  componentDidMount() {
    const { theme, setlist, loadSetlist,  } = this.props;
    if (theme && (!setlist || setlist.status === 'initial')) {
      loadSetlist();
    }
  }
  render() {
    const { theme, setlist  } = this.props;
    if (!theme) {
      return <p>Okänt tema!</p>;
    }
    if (!setlist || setlist.status === 'initial' || setlist.status === 'loading') {
      return <p>Loading setlist for theme....</p>;
    }
    if (setlist.status === 'error') {
      return <p>Ånej! Gick inte ladda :(</p>;
    }
    return (
      <React.Fragment>
        <h4>Sets in the theme {theme.name}</h4>
        <ul>
          {Object.values(setlist.data).map( s => <li key={s.set_num}><Link to={`/sets/${s.set_num}`}>{s.name}</Link></li> )}
        </ul>
      </React.Fragment>
    );
  }
}
