import { GET_CONSTELLATIONS } from 'src/actions/constellations';

const initialState = [];

const constellations = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_CONSTELLATIONS:
      return action.payload;
    default:
      return state;
  }
};

export default constellations;
