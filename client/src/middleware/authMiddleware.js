import axios from 'axios';
import jwtDecode from 'jwt-decode';

import { LOGIN, LOGOUT, addUserInfos, emptyUser } from 'src/actions/user';

const auth = store => next => action => {
  switch (action.type) {
    case LOGIN: {
      axios({
        method: 'post',
        url: 'http://localhost:5000/login',
        data: {
          email: store.getState().login.email,
          password: store.getState().login.password,
        },
      })
        .then(response => {
          console.log('j affiche la page profil');
          const { user } = jwtDecode(response.data.token);
          store.dispatch(addUserInfos(user));
        })
        .catch(error => {
          console.log(error);
        });

      // je laisse passer tout de suite au middleware/reducer suivant
      next(action);
      break;
    }
    case LOGOUT:
      store.dispatch(emptyUser());
      next(action);
      break;
    default:
      console.log('AUTH MIDDLEWARE: ', action, 'passe, je laisse paser');
      next(action);
  }
};

export default auth;
