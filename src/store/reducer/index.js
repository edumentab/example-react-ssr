import { combineReducers } from 'redux';

import themesReducer from './themesReducer';

export default combineReducers({
  themes: themesReducer
});
