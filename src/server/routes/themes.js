import rebrickable from '../../services/rebrickable';
import renderApplication from '../renderApp';
import defaultState from '../../store/defaultState';

export default function handleThemes (req, res) {
  console.log(' --- Prefilling theme list for path', req.url);
  return rebrickable.getThemesByParent(186)
    .then(result => res.send(renderApplication(req.url, {...defaultState, themes: {data: result.data, status: 'fetched'}})))
    .catch(e => {
      console.log(' --- Failed to prefill theme');
      res.send(renderApplication(req.url, {...defaultState, themes: e}));
    });
}