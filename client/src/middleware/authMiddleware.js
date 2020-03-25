import axios from 'axios';
//import jwtDecode from 'jwt-decode';

import { LOGIN, LOGOUT, addUserInfos } from 'src/actions/user';

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
          console.log(response.data.access_token);
          store.dispatch(addUserInfos());
        })
        .catch(error => {
          console.log(error);
        });
      axios({
        method: 'get',
        url: 'http://localhost:5000/login',
        data: {
          user: 'user',
        },
      })
        .then((response) => {
          console.log(response.data);
        });
      // je laisse passer tout de suite au middleware/reducer suivant
      next(action);
      break;
    }
    case LOGOUT:
      axios.post(
        'http://localhost:5000/logout',
        {},
        {
          withCredentials: true,
        }
      );
      next(action);
      break;
    default:
      console.log('AUTH MIDDLEWARE: ', action, 'passe, je laisse paser');
      next(action);
  }
};

export default auth;
