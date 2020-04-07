import React from 'react';
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import PropTypes from 'prop-types';

import CommentStyled from './CommentStyled';

const Comments = ({ text, name, _id, dispatchCommentInfos, deleteComment, author }) => {

  const date = Date.now();

  return (
      <CommentStyled>
            <div className="action-post">
              <p className="info-author">Posté par: {name}, le {date}</p>
              <button onClick={() => {
                      dispatchCommentInfos(_id, author);
                      deleteComment()}} className="delete-post">X</button>
            </div>
          <h2 className="content-post">{text}</h2>
      </CommentStyled>
  );
};
  

Comment.propTypes = {
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