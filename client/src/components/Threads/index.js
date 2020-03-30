import React from 'react';
import PropTypes from 'prop-types';
import Thread from 'src/containers/Thread';
import ThreadsStyled from './ThreadsStyled';

const Threads = ({ list }) => (
  <ThreadsStyled>
    <div className='thread'>
      {list.map(thread => (
        <Thread key={thread.author} {...thread} />
      ))}
    </div>
  </ThreadsStyled>
);

Threads.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Threads;
