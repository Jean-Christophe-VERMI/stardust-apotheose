import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from 'src/components/HomePage';
import Register from 'src/containers/Register';
import UserProfil from 'src/components/UserProfil';
import SkyMap from 'src/components/SkyMap';
import MainStyled from './MainStyled';

const Main = () => (
  <MainStyled>
    <Route path="/" component={HomePage} />
    <Route path="/register" component={Register} />
    <Route path="/skyMap" component={SkyMap} />
    <Route path="/profil" component={UserProfil} />
  </MainStyled>
);

export default Main;
