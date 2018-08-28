import connector from '../connector';
import token from './token';

export default function getSet(setId) {
  return connector.fetch(`https://rebrickable.com/api/v3/lego/sets/${setId}?key=${token}`)
    .then(response => response.json())
    .then(result => result.detail === 'Not found.' ? { error: result.detail } : { data: result })
    .catch(e => Promise.reject({ error: e }));
}
