import { GET_ID } from 'src/actions/forum';

export const initialState = {
  id: '',
};

const forum = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_ID:
      return {
        ...state,
        id: action.value,
      };
    default:
      return state;
  }
};

export default forum;
