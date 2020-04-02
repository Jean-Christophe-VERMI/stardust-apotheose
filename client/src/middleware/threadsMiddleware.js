import axios from 'axios';

import {
  FETCH_THREADS,
  saveThreads,
  NEW_COMMENT,
  saveComment,

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
      const threadId = store.getState().thread.currentThread;
      console.log(threadId);
      axios({
        method: 'post',
        url: `http://localhost:5000/forum/${threadId}/comments`,
        data: {
          author: store.getState().auth.id,
          text: store.getState().thread.text,
          updatedAt: date.now(),
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
