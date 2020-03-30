import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'semantic-ui-react';
import NewCommentStyled from './NewCommentStyled';
import Field from './Field';

const NewComment = ({
  changeField,
  text,
  newComment,
  isLogged,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    newComment();
  };
  return (
    <NewCommentStyled>
      {isLogged && (
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
      )}
      {!isLogged && (
        <div>
          <p> Si vous souhaitez commenter ce sujet, merci de vous inscrire ou vous connecter !</p>
        </div>
      )}
    </NewCommentStyled>
  );
};

NewComment.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  newComment: PropTypes.func.isRequired,
};
export default NewComment;
