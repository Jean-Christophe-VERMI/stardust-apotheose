import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

// import { getUrlByThreadTitle } from 'src/selectors';

import Threads from 'src/containers/Threads';
import ThreadWithComments from 'src/components/ThreadWithComments';

import ForumStyled from './ForumStyled';

const Forum = ({
  isLogged,
  fetchThreads,
}) => {
  useEffect(fetchThreads, []);
  return (
    <ForumStyled>
    <Router>
      {isLogged && (
        <NewThread />
      )}
        <Route exact path='/forum' component={Threads} />
      <Switch>
        <Route path='/forum/my-second-thread' component={ThreadWithComments} />
      </Switch>
    </Router>
    </ForumStyled>
  );
};

Forum.propTypes = {
  fetchThreads: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

Forum.defaultProps = {
  isLogged: false,
};

export default Forum;
