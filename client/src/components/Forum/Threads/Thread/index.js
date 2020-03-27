import React from 'react';
import PropTypes from 'prop-types';
// import Link from 'react-router-dom';

import { getUrlByThreadTitle } from 'src/selectors';
import ThreadStyled from './ThreadStyled';

const Thread = ({ title, author }) => (
  <ThreadStyled>
    <div className="content">
      <h2 className="content-title">{title}</h2>
      <p className="content-text">{author}</p>
      <a className="content-link" to={getUrlByThreadTitle(title)}>Voir le sujet</a>
    </div>
  </ThreadStyled>
);

Thread.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Thread;
