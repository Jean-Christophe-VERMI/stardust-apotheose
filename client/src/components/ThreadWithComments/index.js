import React from 'react';
// import PropTypes from 'prop-types';

import ThreadWithCommentsStyled from './ThreadWithCommentsStyled';


const ThreadWithComments = () => (
  <ThreadWithCommentsStyled>
    <div className="content">
      <h2>title unique id</h2>
      <p className="content-text">author name of thread</p>
    </div>
    <div>
      <p> Les commentaires sont affichés ici</p>
    </div>
    <div>
    <p>Le form post NewComment ici si connecté</p> 
    <p>Sinon message connectez-vous</p> 
    </div>
  </ThreadWithCommentsStyled>
);

export default ThreadWithComments;

/*
<section className="comments">
    {comments.map((answer) => (
      <div>
        <Comment key={answer._id} {...answer} />
      </div>
    ))}
  </section>
  <div>
    <NewComment />
  </div>


  ThreadWithComments.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

ThreadWithComments.defaultProps = {
  isLogged: false,
};

  */
