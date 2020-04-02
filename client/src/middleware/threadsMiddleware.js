import axios from 'axios';

import {
  FETCH_THREADS,
  saveThreads,
  NEW_COMMENT,
  fetchThreads,
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
    case NEW_COMMENT: {
      let threadId = store.getState().threads.currentThread;
      
      axios({
        method: 'post',
        url: `http://localhost:5000/forum/${threadId}/comments`,
        data: {
          author: store.getState().auth.id,
          name: store.getState().register.name,
          text: store.getState().threads.text,
          updatedAt: Date.now(),
        },
      })
        .then((response) => {
          console.log(response.data);
          console.log('je dois fech et save à nouveau tous les Threads');
          store.dispatch(fetchThreads());
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

export default threadMiddleware;
