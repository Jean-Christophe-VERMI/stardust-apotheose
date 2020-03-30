import { SAVE_THREADS, NEW_THREAD, CHANGE_VALUE, NEW_COMMENT } from 'src/actions/thread';

export const initialState = {
  newThreadValue: '',
  active: true,
  list: [],
  title: '',
  text: '',
  display: false,
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
        title: action.thread,
      };
    case NEW_COMMENT:
      return {
        ...state,
        text: action.text,
      };
    default:
      return state;
  }
};

export default threads;
