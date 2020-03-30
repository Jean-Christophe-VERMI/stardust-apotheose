import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getUrlByThreadTitle } from 'src/selectors';

import ThreadStyled from './ThreadStyled';

const Thread = ({ title, author }) => (
  <ThreadStyled>
    <div className='content'>
    <Link className="show-thread" to={getUrlByThreadTitle(title)}>{title}</Link>
      <p className='content-text'>{author}</p>
    </div>
  </ThreadStyled>
);

Thread.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

Thread.defaultProps = {
  isLogged: false,
};

export default Thread;
