import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox, Form } from 'semantic-ui-react';
import Field from './Field';
const Recaptcha = require('react-recaptcha');

import Button from 'src/components/Button';

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
  const handleSubmit = event => {
    event.preventDefault();
    sendUser();
  };
  return (
    <RegisterStyled>
      <div id='register-form'>
        <Form className='register-form-element' onSubmit={handleSubmit}>
          <h1>INSCRIPTION</h1>
          <p>{errorMessage}</p>
          <p>{errorMessage2}</p>
          {validationSignup && <p>{signupMessage}</p>}
          <Field
            name='name'
            placeholder='Nom'
            onChange={changeValue}
            value={name}
            required
          />
          <Field
            name='email'
            placeholder='Adresse Email'
            onChange={changeValue}
            value={email}
            required
          />
          <Field
            name='password'
            type='password'
            placeholder='Mot de passe'
            onChange={changeValue}
            value={password}
            required
          />
          <Field
            name='city'
            placeholder='Ville'
            onChange={changeValue}
            value={city}
            required
          />
          <div className='terms-button-submit'>
            <Form.Field required>
              <Checkbox
                className='terms'
                label="J'accepte les termes et conditions"
              />
            </Form.Field>
            <Form.Field>
              <Checkbox
                className='terms'
                label='Mentions RGPD bla bla bla ...!!!'
              />
            </Form.Field>
          </div>
          <Recaptcha
            sitekey='6LdwN-QUAAAAAH5d15dEMnS-CL6UYmtzvl1C2krw'
            verifyCallback={verifyCallback}
          />
          <Button type='submit' color='primary'>
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
