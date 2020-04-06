import React from 'react';

import TeamPhotosStyled from './TeamPhotosStyled';

const TeamPhotos = () => {
  return (
    <TeamPhotosStyled>
      <div className='team-photos'>
        <h1>La Team</h1>
        <img src='' />
        <p>Aziz, lead back</p>
        <img src='' />
        <p>Chloé, scrum master</p>
        <img src='' />
        <p>JC, lead front</p>
        <img src='' />
        <p>Lucile, project owner</p>
      </div>
    </TeamPhotosStyled>
  );
};

export default TeamPhotos;
