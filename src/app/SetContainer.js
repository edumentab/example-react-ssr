import {connect} from 'react-redux';

import SetInfo from './SetInfo';
import actions from '../actions';

const mapStateToProps = (appState, ownProps) => ({
  set: appState.sets[ownProps.match.params.setId] || { status: 'initial' }
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadSet: () => dispatch(actions.sets.loadSet(ownProps.match.params.setId))
});

export default connect(mapStateToProps, mapDispatchToProps)(SetInfo);
