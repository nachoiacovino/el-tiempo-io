import { all, call, put, takeLatest } from 'redux-saga/effects';

import { auth, createUserProfileDocument, googleProvider } from '../../firebase/firebase.utils';
import { CLEAR_SELECTED } from '../constants';
import { clearPinned, signInFailed, signUpSuccess } from './userActions';
import {
  EMAIL_SIGN_IN_START,
  GOOGLE_SIGN_IN_START,
  PIN_MUNICIPALITY,
  SIGN_IN_SUCCESS,
  SIGN_OUT_FAILED,
  SIGN_OUT_START,
  SIGN_OUT_SUCCESS,
  SIGN_UP_FAILED,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
} from './userConstants';

function* clearSelected() {
  yield put({ type: CLEAR_SELECTED });
}

function* watchPin() {
  yield takeLatest(PIN_MUNICIPALITY, clearSelected);
}

function* getSnapshot(user, additionalData) {
  try {
    const userRef = yield call(createUserProfileDocument, user, additionalData);
    const userSnapshot = yield userRef.get();
    yield put({
      type: SIGN_IN_SUCCESS,
      payload: { id: userSnapshot.id, ...userSnapshot.data() },
    });
    yield put(clearPinned());
  } catch (error) {
    yield put(signInFailed());
  }
}

function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess({ user, additionalData: { displayName } }));
  } catch (error) {
    yield put({ type: SIGN_UP_FAILED, payload: error });
  }
}

function* onSignUp() {
  yield takeLatest(SIGN_UP_START, signUp);
}

function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield getSnapshot(user, additionalData);
}

function* onSignUpSuccess() {
  yield takeLatest(SIGN_UP_SUCCESS, signInAfterSignUp);
}

function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshot(user);
  } catch (error) {
    yield put(signInFailed(error));
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
    call(onSignUp),
    call(onSignUpSuccess),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignOutStart),
  ]);
}
