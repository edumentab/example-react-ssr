import fetch from './fetch';

export default { fetch: (...args) => {
  console.log('FETCHING', args);
  try {
    return fetch.call(null, args);
  } catch(e) {
    console.log('ARGH :/', e);
    return Promise.reject(e);
  }
} };
