import
{
  ADD_USER_INFOS,
  EMPTY_USER,
  TOGGLE_OPEN_MODIFY,
  CHANGE_USER_INFOS,
  CHANGE_VALUE,
} from 'src/actions/user';

export const initialState = {
  toggleOpen: false,
  newName: '',
};

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
    case CHANGE_USER_INFOS:
      return {
        ...state,
        newName: action.user,
      };
    case TOGGLE_OPEN_MODIFY:
      return {
        ...state,
        toggleOpen: !state.toggleOpen,
      };
    case CHANGE_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case EMPTY_USER:
      return {};
    default:
      return state;
  }
};

export default auth;
