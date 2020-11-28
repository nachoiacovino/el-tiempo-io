import {
  EMAIL_SIGN_IN_START,
  GOOGLE_SIGN_IN_START,
  PIN_MUNICIPALITY,
  SET_CURRENT_USER,
  UNPIN_MUNICIPALITY,
} from './userConstants';

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

export const googleSignInStart = () => ({
  type: GOOGLE_SIGN_IN_START,
});

export const emailSignInStart = (emailAndPassword) => ({
  type: EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

/* export const googleSignInSuccess = (user) => ({
  type: GOOGLE_SIGN_IN_SUCCESS,
  payload: user,
});

export const googleSignInFailed = (error) => ({
  type: GOOGLE_SIGN_IN_FAILED,
  payload: error,
});

export const emailSignInSuccess = (user) => ({
  type: EMAIL_SIGN_IN_SUCCESS,
  payload: user,
});

export const emailSignInFailed = (error) => ({
  type: EMAIL_SIGN_IN_FAILED,
  payload: error,
}); */
