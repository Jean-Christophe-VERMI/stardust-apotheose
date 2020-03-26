import React from 'react';
import PropTypes from 'prop-types';

import ProfilStyled from './ProfilStyled';

const Profil = ({
  name,
  email,
}) => (
  <ProfilStyled>
    <div className="user-infos">
      <p>{name}</p>
      <p>{email}</p>
    </div>
  </ProfilStyled>

);

Profil.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Profil;
