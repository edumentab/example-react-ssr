import defaultState from '../defaultState';
import actions from '../../actions';

export default (state = defaultState.setlists, action) => {
  switch(action.type) {
    case actions.sets.constants.GET_SET_INIT: return {
      ...state,
      [action.setId]: {
        status: 'loading', data: {}, error: null
      }
    };
    case actions.sets.constants.GET_SET_ERROR: return {
      ...state,
      [action.setId]: {
        status: 'error', error: action.error
      }
    };
    case actions.sets.constants.GET_SET_SUCCESS: return {
      ...state,
      [action.setId]: {
        status: 'fetched', error: null, data: action.data
      }
    }
    case actions.setlists.constants.GET_SETLIST_SUCCESS: return {
      ...state,
      ...action.data.reduce((mem, set) => ({
        ...mem,
        [set.set_num]: { status: 'fetched', data: set }
      }), {})
    };
    default: return state;
  }
}
