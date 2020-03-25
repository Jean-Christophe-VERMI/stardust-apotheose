import {
  ADD_USER_INFOS,
} from 'src/actions/user';

export const initialState = {
  name: 'NAME-FROM-TOKEN',
  email: 'EMAIL-FROM-TOKEN',
  city: '',
};

const auth = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_USER_INFOS:
      return {
        ...state,
        isLogged: true,
      };
    default:
      return state;
  }
};

export default auth;
