import { CLEAR_SELECTED, REQUEST_MUNICIPALITIES_PENDING, REQUEST_SELECTED_PENDING } from './constants';

export const setRequestMnpsStart = () => ({
  type: REQUEST_MUNICIPALITIES_PENDING,
});

export const setRequestSelectedStart = (payload) => ({
  type: REQUEST_SELECTED_PENDING,
  payload,
});

export const clearSelected = () => ({
  type: CLEAR_SELECTED,
});
