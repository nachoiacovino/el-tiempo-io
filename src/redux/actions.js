import { REQUEST_MUNICIPALITIES_PENDING, REQUEST_SELECTED_PENDING, SET_CURRENT_USER } from './constants';

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user,
});

export const setRequestMnpsStart = () => (dispatch) => {
  dispatch({ type: REQUEST_MUNICIPALITIES_PENDING });
};

export const setRequestSelectedStart = (payload) => (dispatch) => {
  dispatch({ type: REQUEST_SELECTED_PENDING, payload });
};

export const setRequestSaved = () => {
  //
};
