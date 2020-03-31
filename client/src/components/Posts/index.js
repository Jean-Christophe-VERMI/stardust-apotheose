import React from 'react';
import PropTypes from 'prop-types';
import Post from 'src/components/Post';
import PostsStyled from './PostsStyled';

const Posts = ({
  list,
  authorId,
}) => {
  const threadUser = [];
  for (const thread of list) {
    if (authorId == thread.author) {
      console.log(thread);
      threadUser.push(thread);
    }
  };
  console.log(threadUser);
  return (
    <PostsStyled>
      <div className='posts'>
        {threadUser.map(thread => (
          <Post key={thread._id} {...thread} />
        ))}
      </div>
    </PostsStyled>
  );
};

Posts.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
  authorId: PropTypes.string.isRequired,
};

export default Posts;
