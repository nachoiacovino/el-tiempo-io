import { PIN_MUNICIPALITY, SET_CURRENT_USER, UNPIN_MUNICIPALITY } from './userConstants';

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user,
});

export const pinMunicipality = (payload) => ({
  type: PIN_MUNICIPALITY,
  payload,
});

export const unpinMunicipality = (payload) => ({
  type: UNPIN_MUNICIPALITY,
  payload,
});
