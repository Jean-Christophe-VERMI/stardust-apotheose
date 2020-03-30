import React from 'react';
import PropTypes from 'prop-types';


const Comment = ({
  text,
  author,
}) => (
  <div className="content">
    <h2 className="content-title">{text}</h2>
    <p className="content-text">{author}</p>
  </div>
);

Comment.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Comment;
