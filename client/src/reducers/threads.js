import { SAVE_THREADS } from 'src/actions/thread';

export const initialState = {
  list: [],
};

const threads = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_THREADS:
      return {
        ...state,
        list: action.thread,
      };
    default:
      return state;
  }
};

export default threads;
