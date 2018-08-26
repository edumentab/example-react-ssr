import connector from '../connector';
import token from './token';

export default function getAllThemes() {
  return connector.fetch(`https://rebrickable.com/api/v3/lego/themes/?page_size=1000&key=${token}`)
    .then(response => response.json());
}