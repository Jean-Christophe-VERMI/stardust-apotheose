import React from 'react';

const Thread = () => (
  <div className="thread">
    <form>
      <label>Sujet</label>
        <input type="text"></input>
      <label>Description</label>
        <textarea id="story" name="description"
              rows="3" cols="33">
        </textarea>
    </form>
  </div>
);

export default Thread;
