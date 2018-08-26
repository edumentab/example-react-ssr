import { combineReducers } from 'redux';

import themesReducer from './themesReducer';
import setlistsReducer from './setlistsReducer';

export default combineReducers({
  themes: themesReducer,
  setlists: setlistsReducer
});
