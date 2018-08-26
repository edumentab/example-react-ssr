// import getThemesByParent from './services/getThemesByParent';
import getSetsForTheme from './services/getSetsForTheme';

console.log('Getting castle themes...');

getSetsForTheme(199)
  .then(themes => console.log('lion sets', themes))
  .catch(error => console.error('ERROR', error));
