import React from 'react';

import TeamPhotosStyled from './TeamPhotosStyled';

const TeamPhotos = () => {
  return (
    <TeamPhotosStyled>
      <div className='team-photos'>
        <div className='team-photos--photo'>
          <img src='https://files.slack.com/files-pri/TP6J75QNQ-F0119PFCLUA/mini-sangoku.png' />
          <p>Aziz, lead back</p>
        </div>
        <div className='team-photos--photo'>
          <img src='https://files.slack.com/files-pri/TP6J75QNQ-F010X68BG3U/image.png' />
          <p>Chloé, scrum master</p>
        </div>
        <div className='team-photos--photo'>
          <img src='https://files.slack.com/files-pri/TP6J75QNQ-F0119SFUL74/pandavatar.png' />
          <p>JC, lead front</p>
        </div>
        <div className='team-photos--photo'>
          <img src='https://avatars3.githubusercontent.com/u/54038320?s=460&u=b77ad9ccf46ded59bcf70091ee70aa2bde2ea00a&v=4' />
          <p>Lucile, project owner</p>
        </div>
      </div>
    </TeamPhotosStyled>
  );
};

export default TeamPhotos;
