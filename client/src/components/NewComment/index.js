import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'semantic-ui-react';
import NewCommentStyled from './NewCommentStyled';
import Field from './Field';

const NewComment = ({
  changeField,
  text,
  newComment,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    newComment();
  };
  return (
    <NewCommentStyled>
      <div>
        <Form onSubmit={handleSubmit}>
          <h1>Nouveau sujet</h1>
          <div className="comment">
            <Field
              name='text'
              placeholder='Ecrivez votre text ici'
              onChange={changeField}
              value={text}
            />
            <Button className="button-submit" type="submit">ENVOYER</Button>
          </div>
        </Form>
      </div>
    </NewCommentStyled>
  );
};

NewComment.propTypes = {
  text: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  newComment: PropTypes.func.isRequired,
};
export default NewComment;
