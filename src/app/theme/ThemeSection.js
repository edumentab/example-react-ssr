import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ThemeList from './ThemeList';
import ThemeInfo from './ThemeInfo';

export default class Themelist extends React.Component {
  componentDidMount() {
    const { themes, loadThemes } = this.props;
    if (themes.status === 'initial') {
      loadThemes();
    }
  }
  render() {
    const { themes, setlists, loadSetlistForTheme } = this.props;
    if (themes.status === 'error') {
      return <span>Oh no!! {themes.error}</span>;
    }
    if (themes.status !== 'fetched') {
      return '...loading theme list...';
    }
    return (
      <Switch>
        <Route path='/themes' exact render={() => <ThemeList themes={themes.data} />} />
        <Route path='/themes/:themeId' render={({match}) => <ThemeInfo loadSetlist={() => loadSetlistForTheme(match.params.themeId)} theme={themes.data[match.params.themeId]} setlist={setlists[match.params.themeId]} />} />
      </Switch>
    );
  }
}
