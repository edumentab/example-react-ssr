import constants from './constants';
import rebrickable from '../../services/rebrickable';

export default  () => (dispatch) => {
  dispatch({ type: constants.GET_THEMES_INIT });
  rebrickable.getThemesByParent(186)
    .then(res => dispatch({type: constants.GET_THEMES_SUCCESS, data: res.data}))
    .catch(res => dispatch({type: constants.GET_THEMES_ERROR, error: res.error}))
}
