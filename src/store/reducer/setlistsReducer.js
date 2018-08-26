import defaultState from '../defaultState';
import actions from '../../actions';

export default (state = defaultState.setlists, action) => {
  switch(action.type) {
    case actions.setlists.constants.GET_SETLIST_INIT: return {
      ...state,
      [action.themeId]: {
        status: 'loading', data: {}, error: null
      }
    };
    case actions.setlists.constants.GET_SETLIST_ERROR: return {
      ...state,
      [action.themeId]: {
        status: 'error', data: null, error: action.error
      }
    };
    case actions.setlists.constants.GET_SETLIST_SUCCESS: return {
      ...state,
      [action.themeId]: {
        status: 'fetched', data: action.data, error: null
      }
    }
    default: return state;
  }
}
