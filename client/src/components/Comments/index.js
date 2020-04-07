import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import PropTypes from 'prop-types';

import CommentStyled from './CommentStyled';

const Comments = ({ text, name, _id, dispatchCommentInfos, deleteComment, author, isLogged }) => {

  const date = Date.now();
  const dateToFormat = date;

  return (
      <CommentStyled>
            <div className="action-post">
              <p className="info-author">{name}, 
              le <Moment format="DD/MM/YYYY">{dateToFormat}</Moment>
              </p>
              {isLogged && (
              <button
                onClick={() => {
                dispatchCommentInfos(_id, author);
                deleteComment()}} className="delete-post">
                X
              </button>
              )}
            </div>
          <h2 className="content-post">{text}</h2>
      </CommentStyled>
  );
};
  

Comment.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  _id : PropTypes.string.isRequired,
  text : PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  dispatchCommentInfos: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
};

export default Comments;


/*
<div className="content">
  <p className="content-text">Posté par: {author}</p>
  <h2 className="content-title">{text}</h2>
</div>
*/