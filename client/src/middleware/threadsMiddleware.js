import axios from 'axios';

import {
  FETCH_THREADS,
  saveThreads,
} from 'src/actions/thread';

const threadMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_THREADS: {
      axios.get('http://localhost:5000/forum/')
        .then((response) => {
          store.dispatch(saveThreads(response.data));
        })
        .catch((error) => {
          console.error(error);
        });
      next(action);
      break;
    }
    default:
      console.log('Je laisse passer cette action: ', action);
      next(action);
  }
};

export default threadMiddleware;
