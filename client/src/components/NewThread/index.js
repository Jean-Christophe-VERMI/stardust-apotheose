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
        
          <div className="new-thread">
            <h3>Nouveau sujet</h3>
            <Field
              className="field-new-thread"
              name='title'
              placeholder='sujet...'
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
