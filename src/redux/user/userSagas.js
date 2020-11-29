import { all, call, put, takeLatest } from 'redux-saga/effects';

import { auth, createUserProfileDocument, googleProvider } from '../../firebase/firebase.utils';
import { CLEAR_SELECTED } from '../constants';
import { signInFailed } from './userActions';
import {
  EMAIL_SIGN_IN_START,
  GOOGLE_SIGN_IN_START,
  PIN_MUNICIPALITY,
  SIGN_IN_SUCCESS,
  SIGN_OUT_FAILED,
  SIGN_OUT_START,
  SIGN_OUT_SUCCESS,
} from './userConstants';

function* clearSelected() {
  yield put({ type: CLEAR_SELECTED });
}

function* watchPin() {
  yield takeLatest(PIN_MUNICIPALITY, clearSelected);
}

function* getSnapshot(user) {
  try {
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put({
      type: SIGN_IN_SUCCESS,
      payload: { id: userSnapshot.id, ...userSnapshot.data() },
    });
  } catch (error) {
    yield put(signInFailed());
  }
}

function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshot(user);
  } catch (error) {
    yield put(signInFailed());
  }
}

function* onGoogleSignInStart() {
  yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle);
}

function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshot(user);
  } catch (error) {
    yield put(signInFailed());
  }
}

function* onEmailSignInStart() {
  yield takeLatest(EMAIL_SIGN_IN_START, signInWithEmail);
}

function* signOut() {
  try {
    yield auth.signOut();
    yield put({ type: SIGN_OUT_SUCCESS });
  } catch (error) {
    yield put({ type: SIGN_OUT_FAILED, payload: error });
  }
}

function* onSignOutStart() {
  yield takeLatest(SIGN_OUT_START, signOut);
}

export default function* userSagas() {
  yield all([
    call(watchPin),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignOutStart),
  ]);
}
