import React from 'react';

import Nav from 'src/components/Nav';
import HomePageStyled from './HomePageStyled';


const HomePage = () => (
  <HomePageStyled>
  <Nav />
    <div className="header">
      <h1 className="title">STARDUST</h1>
    </div>
  </HomePageStyled>
);

export default HomePage;
