import { SAVE_THREADS, NEW_THREAD } from 'src/actions/thread';

export const initialState = {
  title: '',
  list: [],
};

const threads = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_THREADS:
      return {
        ...state,
        list: action.thread,
      };
    case NEW_THREAD:
      return {
        ...state,
        title: action.value,
      };
    default:
      return state;
  }
};

export default threads;
