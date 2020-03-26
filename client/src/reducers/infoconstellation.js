import { INFO_CONSTELLATION } from 'src/actions/infoconstellation';

const initialState = {
  season: '',
  mainStar: '',
  hemisphereQuadrant: '',
  origin: '',
  latinName: '',
  englishName: '',
  frenchName: '',
  declinaison: '',
};

const infoconstellation = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_CONSTELLATION:
      return {
        ...state,
        season: action.payload.season,
        mainStar: action.payload.mainStar,
        hemisphereQuadrant: action.payload.hemisphereQuadrant,
        origin: action.payload.origin,
        latinName: action.payload.latinName,
        englishName: action.payload.englishName,
        frenchName: action.payload.frenchName,
        declinaison: action.payload.declinaison,
      };
    default:
      return state;
  }
};

export default infoconstellation;
