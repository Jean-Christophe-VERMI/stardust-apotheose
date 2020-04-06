import React from 'react';
import MainStyled from './MainStyled';
import Nav from 'src/components/Nav';
import Footer from 'src/components/Footer';

const Main = ({ children }) => (
  <MainStyled>
    <Nav />
    <Footer />
    {children}
  </MainStyled>
);

export default Main;
