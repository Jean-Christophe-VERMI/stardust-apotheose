import React from 'react';
import PropTypes from 'prop-types';
import Thread from 'src/components/Thread';
import ThreadsStyled from './ThreadsStyled';

const Threads = ({
  list,
}) => (
  <ThreadsStyled>
    <div className="thread">
      {list.map((item) => (
        <Thread key={item._id} {...item} />
      ))}
    </div>
  </ThreadsStyled>
);

Threads.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Threads;
