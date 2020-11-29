import {
  CLEAR_PINNED,
  EMAIL_SIGN_IN_START,
  GOOGLE_SIGN_IN_START,
  PIN_MUNICIPALITY,
  SIGN_IN_FAILED,
  SIGN_OUT_START,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
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

export const clearPinned = () => ({
  type: CLEAR_PINNED,
});

export const signUpStart = (userCredentials) => ({
  type: SIGN_UP_START,
  payload: userCredentials,
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: SIGN_UP_SUCCESS,
  payload: { user, additionalData },
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
