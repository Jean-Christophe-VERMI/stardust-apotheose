import React from 'react';
import { NavLink } from 'react-router-dom';

import Login from 'src/containers/Login';
import PropTypes from 'prop-types';
import NavStyled from './NavStyled';

const Nav = ({ openLeft, toggleLeft, openRight, toggleRight }) => (
  <NavStyled>
    <nav className="navbar">
      <div className="login">
        <button onClick={toggleLeft} className='button-login'></button>
        <div className={openLeft ? 'loginForm' : 'loginForm loginForm--closed'}>
          <Login />
        </div>
      </div>
      <div className="menu">
        <button onClick={toggleRight} className='button-planet'></button>
        <div className={openRight ? 'nav-menu' : 'nav-menu nav-menu--closed'}>
          <NavLink to='/' className='link-menu'>
            Home
          </NavLink>
          <NavLink to='/skymap' className='link-menu'>
            SkyMap
          </NavLink>
          <NavLink to='/forum' className='link-menu'>
            Forum
          </NavLink>
        </div>
      </div>
    </nav>
  </NavStyled>
);

Nav.propTypes = {
  openLeft: PropTypes.bool.isRequired,
  toggleLeft: PropTypes.func.isRequired,
  openRight: PropTypes.bool.isRequired,
  toggleRight: PropTypes.func.isRequired,
};

export default Nav;
