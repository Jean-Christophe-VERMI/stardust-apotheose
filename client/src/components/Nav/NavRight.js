import React from 'react';
import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';

const NavRight = ({
  openRight,
  toggleRight,
}) => (
  <div className="nav">
    <nav>
      <div className={openRight ? 'nav-menu' : 'nav-menu nav-menu--closed'}>
        <NavLink exact to="/skymap" className="link-menu">
          SkyMap
        </NavLink>
        <NavLink exact to="/forum/threads" className="link-menu">
          Forum
        </NavLink>
      </div>
      <button onClick={toggleRight} className="button-planet"></button>
    </nav>
  </div>
);


NavRight.propTypes = {
  openRight: PropTypes.bool.isRequired,
  toggleRight: PropTypes.func.isRequired,
};

export default NavRight;
