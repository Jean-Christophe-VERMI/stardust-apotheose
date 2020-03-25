import {
  SEND_USER,
  MODIFY_FIELD,
} from 'src/actions/user';

export const initialState = {
  name: '',
  email: '',
  password: '',
  city: '',
  users: [],
};

const register = (state = initialState, action = {}) => {
  switch (action.type) {
    case SEND_USER:
      return {
        ...state,
        [action.key]: action.value,
      };
    case MODIFY_FIELD:
      return {
        ...state,
        [action.key]: action.value,
      };
    default:
      return state;
  }
};

export default register;
