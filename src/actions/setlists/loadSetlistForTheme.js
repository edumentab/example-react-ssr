import constants from './constants';
import rebrickable from '../../services/rebrickable';

export default  (themeId) => (dispatch) => {
  dispatch({ type: constants.GET_SETLIST_INIT });
  rebrickable.getSetsForTheme(themeId)
    .then(res => dispatch({type: constants.GET_SETLIST_SUCCESS, data: res.data, themeId}))
    .catch(res => dispatch({type: constants.GET_SETLIST_ERROR, error: res.error, themeId}))
}
