import {
  SEND_USER,
  MODIFY_FIELD,
  ERROR_MESSAGE,
  ERROR_MESSAGE_TWO,
  VALIDATION_SIGNUP,
} from 'src/actions/user';

export const initialState = {
  name: '',
  email: '',
  password: '',
  city: '',
  users: [],
  items: [],
  errorMessage: '',
  errorMessage2: '',
  validationSignup: false,
  signupMessage: 'Inscription confirmé, validez-votre adresse e-mail.',
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
    case ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.value,
      };
    case ERROR_MESSAGE_TWO:
      return {
        ...state,
        errorMessage2: action.value,
      };
    case VALIDATION_SIGNUP:
      return {
        ...state,
        validationSignup: true,
      };
    default:
      return state;
  }
};

export default register;
