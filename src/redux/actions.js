import {
  PIN_MUNICIPALITY,
  REQUEST_MUNICIPALITIES_PENDING,
  REQUEST_SELECTED_PENDING,
  SET_CURRENT_USER,
  UNPIN_MUNICIPALITY,
} from './constants';

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user,
});

export const setRequestMnpsStart = () => ({
  type: REQUEST_MUNICIPALITIES_PENDING,
});

export const setRequestSelectedStart = (payload) => ({
  type: REQUEST_SELECTED_PENDING,
  payload,
});

export const pinMunicipality = (payload) => ({
  type: PIN_MUNICIPALITY,
  payload,
});

export const unpinMunicipality = (payload) => ({
  type: UNPIN_MUNICIPALITY,
  payload,
});
