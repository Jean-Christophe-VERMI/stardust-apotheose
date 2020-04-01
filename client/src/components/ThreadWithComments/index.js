import React from 'react';
import { useHistory } from "react-router";
import PropTypes from 'prop-types';

import ThreadWithCommentsStyled from './ThreadWithCommentsStyled';


const ThreadWithComments = ({ list, currentThread }) => {

  console.log(list);
  console.log(currentThread);
  const theGoodThread = list.find(thread => thread._id === currentThread);
  console.log(theGoodThread);
  console.log(theGoodThread.title);
  console.log(theGoodThread.name);

  const history = useHistory();
  function goBackHandle(){
    history.goBack();
  }

  return (
    <ThreadWithCommentsStyled>
      <div className="go-back-button">
        <button onClick={goBackHandle}>Retour aux sujets</button>
      </div>
      <div className="content">
        <h2>{theGoodThread.title}</h2>
        <p>publié par {theGoodThread.name}</p>
      </div>
      <div className="comments">
        <p> Les commentaires sont affichés ici</p>
      </div>
      <div className="form-comments">
      <p>Le form post NewComment ici si connecté</p> 
      <p>Sinon message connectez-vous</p> 
      </div>
      
    </ThreadWithCommentsStyled>
  );
};

ThreadWithComments.propTypes = {
  currentThread: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ThreadWithComments;
