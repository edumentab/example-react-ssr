import {connect} from 'react-redux';

import Themes from './Themes';
import actions from '../actions';

const mapStateToProps = (appState) => appState.themes;

const mapDispatchToProps = (dispatch) => ({
  loadThemes: () => dispatch(actions.themes.loadThemes())
});

export default connect(mapStateToProps, mapDispatchToProps)(Themes);
