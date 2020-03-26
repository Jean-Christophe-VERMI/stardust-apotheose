import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Thread from 'src/containers/Thread';
import ThreadsStyled from './ThreadsStyled';

const Threads = ({
  fetchThreads,
  threads,
}) => {
  useEffect(fetchThreads, []);
  return (
    <ThreadsStyled>
      <div className="thread">
        {threads.map((thread) => (
          <Thread key={thread.id} {...thread} />
        ))}
      </div>
    </ThreadsStyled>
  );
};

Threads.propTypes = {
  fetchThreads: PropTypes.func.isRequired,
  threads: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Threads;
