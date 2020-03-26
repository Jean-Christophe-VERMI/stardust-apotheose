import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Thread from 'src/containers/Thread';
import ThreadsStyled from './ThreadsStyled';

const Threads = ({
  threads,
  fetchThreads,
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
  threads: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  fetchThreads: PropTypes.func.isRequired,
};

export default Threads;
