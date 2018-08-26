import { createStore, compose, applyMiddleware } from 'redux';
import ReduxThunk, {} from 'redux-thunk';

export default function initiateStore(initialState) {
  const reducer = (state) => state;
  const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(reducer, initialState, composeEnhancers(
    applyMiddleware(ReduxThunk)
  ));
}
