import axios from 'axios';

import { CHANGE_USER_INFOS, updateUserInfos, DELETE_USER } from 'src/actions/user';

const userMiddleware = store => next => async action => {
  switch (action.type) {
    case CHANGE_USER_INFOS: {
      await axios({
        method: 'put',
        url: 'http://localhost:5000/users/:id',
        data: {
          name: store.getState().auth.newName,
        },
      })
        .then(response => {
          const { user } = response.data;
          store.dispatch(updateUserInfos(user));
        })
        .catch(error => {
          console.log(error);
        });

      // je laisse passer tout de suite au middleware/reducer suivant
      next(action);
      break;
    }
    case DELETE_USER: {
      axios({
        method: 'delete',
        url: 'http://localhost:5000/users/:id',
      })
        .then(response => {
          console.log(response.data);
          //store.dispatch(addUserInfos(user));
        })
        .catch(error => {
          console.log(error);
        });

      // je laisse passer tout de suite au middleware/reducer suivant
      next(action);
      break;
    }
    default:
      console.log('Je laisse passer cette action: ', action);
      next(action);
      break;
  }
};

export default userMiddleware;
