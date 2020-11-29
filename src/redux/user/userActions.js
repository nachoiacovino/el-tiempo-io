import {
  EMAIL_SIGN_IN_START,
  GOOGLE_SIGN_IN_START,
  PIN_MUNICIPALITY,
  SIGN_IN_FAILED,
  SIGN_OUT_START,
  UNPIN_MUNICIPALITY,
} from './userConstants';

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

export const signInFailed = (error) => ({
  type: SIGN_IN_FAILED,
  payload: error,
});

export const signOutStart = () => ({
  type: SIGN_OUT_START,
});
