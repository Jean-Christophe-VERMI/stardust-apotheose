import axios from 'axios';

import { NEW_THREAD, newThread } from 'src/actions/thread';


const newThreadMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case NEW_THREAD: {
      axios({
        method: 'post',
        url: 'http://localhost:5000/forum',
        data: {
          title: store.getState().threads.title,
        },
      })
        .then((response) => {
          console.log(response.data);
          store.dispatch(newThread());
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    default:
      console.log('Je laisse passer cette action: ', action);
      next(action);
  }
};

export default newThreadMiddleware;
