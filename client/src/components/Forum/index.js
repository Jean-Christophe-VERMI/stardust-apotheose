import React from 'react';
import Thread from 'src/components/Forum/Thread';
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
    <Thread />
  </ForumStyled>

);

Forum.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

Forum.defaultProps = {
  isLogged: false,
};

export default Forum;
