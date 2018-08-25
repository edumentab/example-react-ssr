import token from './token';

import fetch from './fetch';

export default function getAllThemes() {
  return fetch(`https://rebrickable.com/api/v3/lego/themes/?page_size=1000&key=${token}`)
    .then(response => response.json());
}
