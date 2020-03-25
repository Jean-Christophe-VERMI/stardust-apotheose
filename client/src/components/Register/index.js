import React from 'react';
import PropTypes from 'prop-types';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import Field from './Field';

import RegisterStyled from './RegisterStyled';

const Register = ({
  name,
  email,
  password,
  city,
  changeValue,
  sendUser,
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
              <Checkbox className="terms" label='I agree to the Terms and Conditions' />
            </Form.Field>
            <Button className="button-submit" type="submit">ENREGISTRER</Button>
          </div>
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
};

export default Register;
