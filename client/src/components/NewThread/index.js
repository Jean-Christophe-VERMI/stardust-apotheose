import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'semantic-ui-react';
import NewThreadStyled from './NewThreadStyled';
import Field from './Field';

const NewThread = ({
  changeField,
  title,
  newThread,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    newThread();
  };
  return (
    <NewThreadStyled>
      <div>
        <Form onSubmit={handleSubmit}>
          <h1>Nouveau sujet</h1>
          <div className="thread">
            <Field
              placeholder="Ecrivez votre titre ici"
              onChange={changeField}
              value={title}
            />
            <Button className="button-submit" type="submit">ENVOYER</Button>
          </div>
        </Form>
      </div>
    </NewThreadStyled>
  );
};

NewThread.propTypes = {
  title: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  newThread: PropTypes.func.isRequired,
};
export default NewThread;
