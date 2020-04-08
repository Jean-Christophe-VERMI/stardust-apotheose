import React from 'react';
import Nav from 'src/containers/Nav';
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
