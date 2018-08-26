import { createStore } from 'redux';

export default function initiateStore(initialState) {
  const reducer = (state) => state;
  return createStore(reducer, initialState);
}
