import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Field from './Field';

// import { useField } from './hooks';

import './styles.css';

const Login = ({
  email,
  password,
  changeField,
  handleLogin,
  handleLogout,
  isLogged,
  loggedMessage,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };
  return (
    <div className='login-form'>
      {isLogged && (
        <div className='login-form-logged'>
          <div className="message-profil">
            <p>{loggedMessage}</p>
            <NavLink className="profil-link" exact to='/profil'>
              Mon profil
            </NavLink>
          </div>
            <button
              type='button'
              className='login-form-button'
              onClick={handleLogout}
            >
            Déconnexion
            </button>
      </div>
      )}
      {!isLogged && (
        <form className='login-form-element' onSubmit={handleSubmit}>
          <div className='field-log'>
            <Field
              name='email'
              placeholder='Adresse Email'
              onChange={changeField}
              value={email}
            />
            <div className='link-log'>
              <NavLink exact to='/register'>
                S'inscrire
              </NavLink>
            </div>
          </div>
          <div className='field-log'>
            <Field
              name='password'
              type='password'
              placeholder='Mot de passe'
              onChange={changeField}
              value={password}
            />
            <div className='link-log'>
              <NavLink exact to='/password'>
                Mot de passe oublié ?
              </NavLink>
            </div>
          </div>
          <button type='submit' className='login-form-button'>
            OK
          </button>
        </form>
      )}
    </div>
  );
};

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  loggedMessage: PropTypes.string.isRequired,
};

Login.defaultProps = {
  isLogged: false,
  loggedMessage: 'Connecté',
};

export default Login;
