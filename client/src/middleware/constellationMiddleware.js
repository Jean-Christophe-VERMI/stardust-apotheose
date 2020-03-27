import axios from 'axios';

import {
  getConstellations,
  GET_CONSTELLATIONS,
} from 'src/actions/constellations';

const constellations = store => next => action => {
  switch (action.type) {
    case GET_CONSTELLATIONS: {
      axios({
        method: 'get',
        url: 'http://localhost:5000/constellations',
      })
        .then(res => {
          store.dispatch(getConstellations(res.data));
        })
        .catch(error => {
          console.log(error);
        });

      next(action);
      break;
    }

    default:
      next(action);
      break;
  }
};

export default constellations;
