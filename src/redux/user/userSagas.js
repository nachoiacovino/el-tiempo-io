import { all, call, put, takeLatest } from 'redux-saga/effects';

import { auth, createUserProfileDocument, googleProvider } from '../../firebase/firebase.utils';
import { CLEAR_SELECTED } from '../constants';
import {
  EMAIL_SIGN_IN_FAILED,
  EMAIL_SIGN_IN_START,
  EMAIL_SIGN_IN_SUCCESS,
  GOOGLE_SIGN_IN_FAILED,
  GOOGLE_SIGN_IN_START,
  GOOGLE_SIGN_IN_SUCCESS,
  PIN_MUNICIPALITY,
} from './userConstants';

function* clearSelected() {
  yield put({ type: CLEAR_SELECTED });
}

function* watchPin() {
  yield takeLatest(PIN_MUNICIPALITY, clearSelected);
}

function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put({
      type: GOOGLE_SIGN_IN_SUCCESS,
      payload: { id: userSnapshot.id, ...userSnapshot.data() },
    });
  } catch (error) {
    yield put({
      type: GOOGLE_SIGN_IN_FAILED,
      payload: error,
    });
  }
}

function* onGoogleSignInStart() {
  yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle);
}

function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put({
      type: EMAIL_SIGN_IN_SUCCESS,
      payload: { id: userSnapshot.id, ...userSnapshot.data() },
    });
  } catch (error) {
    yield put({
      type: EMAIL_SIGN_IN_FAILED,
      payload: error,
    });
  }
}

function* onEmailSignInStart() {
  yield takeLatest(EMAIL_SIGN_IN_START, signInWithEmail);
}

export default function* userSagas() {
  yield all([
    call(watchPin),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
  ]);
}
