// == Import npm
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// == Import
import Theme from 'src/components/Theme/theme';
import Main from 'src/components/Main';
import HomePage from 'src/components/HomePage';
import Register from 'src/containers/Register';
import UserProfil from 'src/components/UserProfil';
import SkyMap from 'src/components/SkyMap';
import Forum from 'src/containers/Forum';

import AppStyled from './AppStyled';

// == Composant
const App = () => (
  <Theme>
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
  </Theme>
);
// == Export
export default App;
