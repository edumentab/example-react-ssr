import getAllThemes from './getAllThemes';

export default function getThemesByParent(parentId) {
  return getAllThemes()
    .then(data => data.results.filter(t => t.parent_id === parentId));
}
