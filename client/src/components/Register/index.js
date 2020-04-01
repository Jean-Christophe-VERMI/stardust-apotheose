import React from 'react';
import PropTypes from 'prop-types';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import Field from './Field';
const Recaptcha = require('react-recaptcha');

import RegisterStyled from './RegisterStyled';

const Register = ({
  name,
  email,
  password,
  city,
  changeValue,
  sendUser,
  errorMessage,
  errorMessage2,
  validationSignup,
  signupMessage,
  verifyCallback,
  isVerified,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    sendUser();
  };
  return (
    <RegisterStyled>
      <div id="register-form">
        <Form className="register-form-element" onSubmit={handleSubmit}>
          <h1>INSCRIPTION</h1>
          <p>{errorMessage}</p>
          <p>{errorMessage2}</p>
          {validationSignup && (
          <p>{signupMessage}</p>
          )}
          <Field
            name="name"
            placeholder="Nom"
            onChange={changeValue}
            value={name}
          />
          <Field
            name="email"
            placeholder="Adresse Email"
            onChange={changeValue}
            value={email}
          />
          <Field
            name="password"
            type="password"
            placeholder="Mot de passe"
            onChange={changeValue}
            value={password}
          />
          <Field
            name="city"
            placeholder="Ville"
            onChange={changeValue}
            value={city}
          />
          <div className="terms-button-submit">
            <Form.Field>
            <Checkbox  className="terms" label={<label> J'accepte les <a href = '/termes'> termes et conditions  </a> </label>}  />
            </Form.Field>
         </div>
          <Recaptcha
            sitekey="6LdwN-QUAAAAAH5d15dEMnS-CL6UYmtzvl1C2krw"
            verifyCallback={verifyCallback}
          />
          <Button
            className="button-submit"
            type="submit"
            disabled={!isVerified}
          >
            ENREGISTRER
          </Button>
        </Form>
      </div>
    </RegisterStyled>

  );
};

Register.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  changeValue: PropTypes.func.isRequired,
  sendUser: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
  errorMessage2: PropTypes.string.isRequired,
  validationSignup: PropTypes.bool.isRequired,
  signupMessage: PropTypes.string.isRequired,
  verifyCallback: PropTypes.func.isRequired,
  isVerified: PropTypes.bool.isRequired,
};

export default Register;
