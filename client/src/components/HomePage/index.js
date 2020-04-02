import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { Element, animateScroll as scroll, Events } from 'react-scroll';

import Button from 'src/components/Button';
import InfoPage from 'src/components/InfoPage';

import Anchor from 'src/components/Anchor';
import HomePageStyled from './HomePageStyled';

const HomePage = () => {
  const [nextElement, setNextElement] = useState(1);
  const maxElements = 3;

  const handleScroll = () => {
    if (nextElement === maxElements) {
      scroll.scrollToTop();
      setNextElement(1);
    } else {
      setNextElement(nextElement + 1);
    }
  };
  return (
    <HomePageStyled>
      <Element name='0'>
        <div className='header'>
          <h1 className='title'>STARDUST</h1>
        </div>
      </Element>
      <Element name='1'>
        <InfoPage />
      </Element>

      <Anchor
        handleScroll={handleScroll}
        nextElement={nextElement}
        maxElements={maxElements}
      />
    </HomePageStyled>
  );
};

export default HomePage;
