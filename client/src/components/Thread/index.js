import React from 'react';
import PropTypes from 'prop-types';
import Comment from 'src/components/Comment';
import NewComment from 'src/containers/NewComment';
import ThreadStyled from './ThreadStyled';


const Thread = ({
  title,
  author,
  comments,
  isLogged,
}) => (
  <ThreadStyled>
    <div className="content">
      <h2 className="content-title">{title}</h2>
      <p className="content-text">{author}</p>
      {comments.map((answer) => (
        <Comment key={answer._id} {...answer} />
      ))}
    </div>
    {isLogged && (
      <NewComment />
    )}
  </ThreadStyled>
);

Thread.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  isLogged: PropTypes.bool.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

Thread.defaultProps = {
  isLogged: false,
};

export default Thread;
