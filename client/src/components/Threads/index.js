import React from 'react';
import PropTypes from 'prop-types';
import Thread from 'src/containers/Thread';
import ThreadsStyled from './ThreadsStyled';

const Threads = ({ list }) => {
  console.log(list)
  return (
    <ThreadsStyled>
    <h1>FORUM STARDUST : Liste des sujets</h1>
      <div className='thread'>
        {list.map(thread => (
          <Thread key={thread._id} {...thread} />
        ))}
      </div>
    </ThreadsStyled>
  );
};

Threads.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Threads;
