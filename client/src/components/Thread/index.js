import React from 'react';
import PropTypes from 'prop-types';
import Comment from 'src/components/Comment';
import NewComment from 'src/containers/NewComment';
import ThreadStyled from './ThreadStyled';

const Thread = ({ title, author, comments }) => (
  <ThreadStyled>
    <div className='content'>
      <h2 className='content-title'>{title}</h2>
      <p className='content-text'>{author}</p>
      {comments.map(answer => (
        <div>
          <Comment key={answer._id} {...answer} />
          <NewComment />
        </div>
      ))}
    </div>
  </ThreadStyled>
);

Thread.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

Thread.defaultProps = {
  isLogged: false,
};

export default Thread;
