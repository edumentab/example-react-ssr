import {connect} from 'react-redux';

import Themes from './Themes';

const mapStateToProps = (appState) => appState.themeList;

export default connect(mapStateToProps)(Themes);
