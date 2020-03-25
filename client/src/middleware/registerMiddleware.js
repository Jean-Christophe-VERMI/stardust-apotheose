import axios from 'axios';

import { SEND_USER, errorMsg } from 'src/actions/user';


const registerMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_USER: {
      axios({
        method: 'post',
        url: 'http://localhost:5000/register',
        data: {
          name: store.getState().register.name,
          email: store.getState().register.email,
          password: store.getState().register.password,
          city: store.getState().register.city,
        },
      })
        .then((response) => {
          console.log('la requete est ok, msg confirmation e-mail');
          console.log(response.data);
        })
        .catch((error) => {
          if (error.response) {

            const errorMessage = error.response.data.errors[0].msg;
            // const errors = error.response.errors;
            // const errorMessage = errors.map(function (el) { return el.msg; });
        
            // console.log(errorMessage);
            store.dispatch(errorMsg(errorMessage));
          }
          
        });
      next(action);
      break;
    }
    default:
      console.log('Je laisse passer cette action: ', action);
      next(action);
  }
};

export default registerMiddleware;
