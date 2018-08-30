import renderApplication from '../renderApp';
import defaultState from '../../store/defaultState';

export default function handleThemes (req, res) {
  console.log(' --- Using default handling for path', req.url);
  return res.send(renderApplication(req.url, defaultState));
}