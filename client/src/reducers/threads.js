import { SAVE_THREADS, NEW_THREAD, CHANGE_VALUE } from 'src/actions/thread';

export const initialState = {
  title: '',
  active: true,
  list: [],
};

const threads = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
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
