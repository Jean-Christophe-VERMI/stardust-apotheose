import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import AnchorStyled from './AnchorStyled';

import { Link } from 'react-scroll';

const Anchor = () => (
  <AnchorStyled>
    <Link
      activeClass='active'
      to='1'
      spy={true}
      smooth={true}
      offset={window.innerHeight}
      duration={500}
    >
      <FontAwesomeIcon icon={faChevronDown} />
    </Link>
  </AnchorStyled>
);

export default Anchor;
