import token from './token';
import fetch from './fetch';

export default function getSetsForTheme(themeId) {
  return fetch(`https://rebrickable.com/api/v3/lego/sets/?page_size=1000&theme_id=${themeId}&key=${token}`)
    .then(response => response.json());
}
