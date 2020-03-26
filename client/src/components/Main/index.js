import React from 'react';
import MainStyled from './MainStyled';
import Nav from 'src/components/Nav';

const Main = ({ children }) => (
  <MainStyled>
    <Nav />
    {children}
  </MainStyled>
);

export default Main;
