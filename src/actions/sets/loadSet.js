import constants from './constants';
import rebrickable from '../../services/rebrickable';

export default  (setId) => (dispatch) => {
  dispatch({ type: constants.GET_SET_INIT, setId });
  rebrickable.getSet(setId)
    .then(res => dispatch({type: constants.GET_SET_SUCCESS, data: res.data, setId}))
    .catch(res => dispatch({type: constants.GET_SET_ERROR, error: res.error, setId}))
}
