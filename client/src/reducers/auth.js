import { ADD_USER_INFOS, EMPTY_USER } from 'src/actions/user';

export const initialState = {};

const auth = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_USER_INFOS:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        city: action.payload.city,
        id: action.payload.id,
      };
    case EMPTY_USER:
      return {};
    default:
      return state;
  }
};

export default auth;
