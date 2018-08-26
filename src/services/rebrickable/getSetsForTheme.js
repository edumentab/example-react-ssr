import connector from '../connector';
import token from './token';

export default function getSetsForTheme(themeId) {
  return connector.fetch(`https://rebrickable.com/api/v3/lego/sets/?page_size=1000&theme_id=${themeId}&key=${token}`)
    .then(response => response.json())
    .then(result => ({ data: result.results }))
    .catch(e => Promise.reject({ error: e }));
}
