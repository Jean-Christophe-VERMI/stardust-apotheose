import React from 'react';
import Threads from 'src/containers/Threads';
import NewThread from 'src/components/NewThread';
import PropTypes from 'prop-types';
import ForumStyled from './ForumStyled';

const Forum = ({
  isLogged,
}) => (
  <ForumStyled>
    {isLogged && (
      <NewThread />
    )}
    <Threads />
  </ForumStyled>
);

Forum.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

Forum.defaultProps = {
  isLogged: false,
};

export default Forum;
