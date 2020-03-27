import React  from 'react';
import PropTypes from 'prop-types';
import Thread from 'src/containers/Thread';
import ThreadsStyled from './ThreadsStyled';

const Threads = ({
  threads,
}) => {
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
};

export default Threads;
