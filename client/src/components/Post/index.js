import React from 'react';
import PropTypes from 'prop-types';

import PostStyled from './PostStyled';

const Post = ({ title }) => (
  <PostStyled>
    <div className='content'>
      <p>{title}</p>
    </div>
  </PostStyled>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Post;
