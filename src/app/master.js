import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import Home from './home';
import Error404 from './404';
import About from './about';
import ThemesContainer from './ThemesContainer';

import styles from './master.css';

const Master = () => (
  <React.Fragment>
    <h2>LEGO Castle</h2>
    <nav>
      <ul>
        <li><NavLink exact activeClassName={styles.active} to='/'>Home</NavLink></li>
        <li><NavLink exact activeClassName={styles.active} to='/lego'>LEGO</NavLink></li>
        <li><NavLink exact activeClassName={styles.active} to='/about'>About</NavLink></li>
      </ul>
    </nav>
    <hr/>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/lego' exact component={ThemesContainer} />
      <Route path='/about' exact component={About} />
      <Route component={Error404} />
    </Switch>
  </React.Fragment>
);

export default Master;
