import React from 'react';

import { Link } from 'react-router-dom';

const Home = ({themes}) => (
  <React.Fragment>
    <ul>
      {Object.values(themes).map( t => <li key={t.name}><Link to={`/themes/${t.id}`}>{t.name}</Link></li> )}
    </ul>
  </React.Fragment>
);

export default Home;
