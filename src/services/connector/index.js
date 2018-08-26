import fetch from './fetch';

export default { fetch: (...args) => {
  console.log('FETCHING', args);
  return fetch.call(null, args);
} };
