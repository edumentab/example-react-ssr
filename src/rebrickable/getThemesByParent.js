export default function getThemesByParent(parentId) {
  return this.getAllThemes()
    .then(data => data.results.filter(t => t.parent_id === parentId));
}
