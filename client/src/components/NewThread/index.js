import React from 'react';
import NewThreadStyled from './NewThreadStyled';

const NewThread = () => (
  <NewThreadStyled>
    <div className="thread">
      <form>
        <label>Sujet</label>
          <input type="text"></input>
        <label>Description</label>
      </form>
    </div>
  </NewThreadStyled>
);

export default NewThread;
