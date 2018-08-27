import {connect} from 'react-redux';

import ThemeSection from './ThemeSection';
import actions from '../actions';

const mapStateToProps = (appState) => ({
  themes: appState.themes,
  setlists: appState.setlists
});

const mapDispatchToProps = (dispatch) => ({
  loadThemes: () => dispatch(actions.themes.loadThemes()),
  loadSetlistForTheme: (themeId) => dispatch(actions.setlists.loadSetlistForTheme(themeId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSection);
