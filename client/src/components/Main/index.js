import React from 'react';
import Nav from 'src/containers/Nav';
import MainStyled from './MainStyled';


const Main = ({ children }) => (
  <MainStyled>
    <Nav />
    {children}
  </MainStyled>
);

export default Main;
