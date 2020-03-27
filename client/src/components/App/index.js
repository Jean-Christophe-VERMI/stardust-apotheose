// == Import npm
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


// == Import
import Main from 'src/components/Main';
import HomePage from 'src/components/HomePage';
import Register from 'src/containers/Register';
import UserProfil from 'src/components/UserProfil';
import SkyMap from 'src/components/SkyMap';
import Forum from 'src/containers/Forum';

import AppStyled from './AppStyled';
import './app.css';

// == Composant
const App = () => (
    <AppStyled>
      <Router>
        <Main>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/register' component={Register} />
            <Route path='/skymap' component={SkyMap} />
            <Route path='/profil' component={UserProfil} />
            <Route path='/forum' component={Forum} />
          </Switch>
        </Main>
      </Router>
    </AppStyled>
);
// == Export
export default App;
