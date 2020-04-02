import React from 'react';

import Button from 'src/components/Button';
import TeamPageStyled from './TeamPageStyled';

const TeamPage = () => {
  return (
    <TeamPageStyled>
      <div className='team-photos'></div>
      <div className='contact'>
        <h1>Nous contacter</h1>
        <form className='contact-form'>
          <input type='text' placeholder='Nom...' autoComplete='off' />
          <input
            type='email'
            placeholder='Adresse Email...'
            autoComplete='off'
          />

          <textarea
            className='message-text'
            cols='30'
            rows='10'
            placeholder='Message…'
          ></textarea>

          <Button type='submit' color='primary'>
            Envoyer
          </Button>
        </form>
      </div>
    </TeamPageStyled>
  );
};

export default TeamPage;
