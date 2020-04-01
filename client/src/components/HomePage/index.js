import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { Element, animateScroll as scroll } from 'react-scroll';

import Button from 'src/components/Button';
import InfoPage from 'src/components/InfoPage';
import Anchor from 'src/components/Anchor';
import HomePageStyled from './HomePageStyled';

const HomePage = () => {
  return (
    <HomePageStyled>
      <Element name='0'>
        <div className='header'>
          <h1 className='title'>STARDUST</h1>
          <Anchor />
        </div>
      </Element>
      <Element name='1'>
        <InfoPage />
      </Element>
    </HomePageStyled>
  );
};

export default HomePage;
