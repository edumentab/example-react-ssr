import defaultState from '../defaultState';
import actions from '../../actions';

export default (state = defaultState.themes, action) => {
  switch(action.type) {
    case actions.themes.constants.GET_THEMES_INIT: return {
      status: 'loading', data: {}, error: null
    };
    case actions.themes.constants.GET_THEMES_ERROR: return {
      status: 'error', error: action.error
    };
    case actions.themes.constants.GET_THEMES_SUCCESS: return {
      status: 'fetched', error: null, data: action.data
    }
    default: return state;
  }
}
