import axios from 'axios';

import { NEW_THREAD, fetchThreads, NEW_COMMENT } from 'src/actions/thread';


const newThreadMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case NEW_THREAD: {
      axios({
        method: 'post',
        url: 'http://localhost:5000/forum/',
        data: {
          author: store.getState().auth.id,
          name: store.getState().auth.name,
          title: store.getState().threads.title,
          active: store.getState().threads.active,
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
    case NEW_COMMENT: {
      axios({
        threadId: store.getState().threads.list._id,
        method: 'post',
        url: `http://localhost:5000/forum/${threadId}/comments`,
        data: {
          author: store.getState().auth.id,
          text: store.getState().threads.text,
          active: store.getState().threads.active,
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

export default newThreadMiddleware;
