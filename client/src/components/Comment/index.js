import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({
  text,
  author,
}) => (
  <div className="content">
    <p className="content-text">Posté par: {author}</p>
    <h2 className="content-title">{text}</h2>
    
  </div>
);

Comment.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Comment;
