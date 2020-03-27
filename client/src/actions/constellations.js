export const GET_CONSTELLATIONS = 'GET_CONSTELLATIONS';

export const getConstellations = constellations => ({
  type: GET_CONSTELLATIONS,
  payload: constellations,
});
