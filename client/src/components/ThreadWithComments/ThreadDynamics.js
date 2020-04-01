import React from 'react';
import PropTypes from 'prop-types';

import Comment from 'src/components/Comment';
import NewComment from 'src/containers/NewComment';
import ThreadWithCommentStyled from './ThreadWithCommentsStyled';

const ThreadWithComments = ({
  list
}) => (
  <ThreadWithCommentStyled>
  <div className="content">
    <h2 className="content-title">{list.title}</h2>
    <p className="content-text">{list.author}</p>
  </div>
  <section className="comments">
    {comments.map((answer) => (
      <div>
        <Comment key={answer._id} {...answer} />
      </div>
    ))}
  </section>
  <div>
    <NewComment />
  </div>
  </ThreadWithCommentStyled>
);

ThreadWithComments.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ThreadWithComments;
