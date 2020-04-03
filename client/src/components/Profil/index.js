import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Field from './Field';
import ProfilStyled from './ProfilStyled';

const Profil = ({
  name,
  newName,
  email,
  city,
  toggle,
  toggleOpen,
  changeValue,
  changeUserInfos,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    changeUserInfos(newName);
  };
  return (
    <ProfilStyled>
      <div className="user-infos">
        <div>
          <p>{name}</p>
          <Link onClick={toggle}>Modifier</Link>
          {toggleOpen && (
            <form onSubmit={handleSubmit}>
              <div>
                <Field
                  name='newName'
                  placeholder='Nouveau nom'
                  onChange={changeValue}
                  value={newName}
                />
                <button type='submit' className='login-form-button'>
                  OK
                </button>
              </div>
            </form>
          )}
        </div>
        <div>
          <p>{email}</p>
          <Link onClick={toggle}>Modifier</Link>
          {toggleOpen && (
            <Field />
          )}
        </div>
        <div>
          <p>{city}</p>
          <Link onClick={toggle}>Modifier</Link>
          {toggleOpen && (
            <Field />
          )}
        </div>
      </div>
    </ProfilStyled>
  );
};

Profil.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  newName: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired,
  toggleOpen: PropTypes.bool.isRequired,
  changeValue: PropTypes.func.isRequired,
  changeUserInfos: PropTypes.func.isRequired,
};

export default Profil;
