import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import Home from './home';
import Error404 from './404';
import About from './about';
import ThemeSectionContainer from './ThemeSectionContainer';
import SetContainer from './SetContainer';

import styles from './master.css';

const Master = () => (
  <React.Fragment>
    <h2>LEGO Castle</h2>
    <nav>
      <ul>
        <li><NavLink exact activeClassName={styles.active} to='/'>Home</NavLink></li>
        <li><NavLink activeClassName={styles.active} to='/themes' isActive={(match, loc) => loc.pathname.match(/^\/(themes|sets)/)}>LEGO</NavLink></li>
        <li><NavLink exact activeClassName={styles.active} to='/about'>About</NavLink></li>
      </ul>
    </nav>
    <hr/>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/themes' component={ThemeSectionContainer} />
      <Route path='/about' exact component={About} />
      <Route path='/sets/:setId' exact component={SetContainer} />
      <Route component={Error404} />
    </Switch>
  </React.Fragment>
);

export default Master;
