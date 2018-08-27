import { combineReducers } from 'redux';

import themesReducer from './themesReducer';
import setlistsReducer from './setlistsReducer';
import setsReducer from './setsReducer';

export default combineReducers({
  themes: themesReducer,
  setlists: setlistsReducer,
  sets: setsReducer
});
