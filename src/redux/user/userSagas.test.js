import { put, takeLatest } from 'redux-saga/effects';

import { auth } from '../../firebase/firebase.utils';
import {
  EMAIL_SIGN_IN_START,
  GOOGLE_SIGN_IN_START,
  PIN_MUNICIPALITY,
  SIGN_OUT_FAILED,
  SIGN_OUT_START,
  SIGN_OUT_SUCCESS,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
} from './userConstants';
import {
  clearSelected,
  onEmailSignInStart,
  onGoogleSignInStart,
  onSignOutStart,
  onSignUpStart,
  onSignUpSuccess,
  signInAfterSignUp,
  signInWithEmail,
  signInWithGoogle,
  signOut,
  signUp,
  watchPin,
} from './userSagas';

describe('on pin municipality', () => {
  it('should trigger on PIN_MUNICIPALITY', () => {
    const generator = watchPin();
    expect(generator.next().value).toEqual(
      takeLatest(PIN_MUNICIPALITY, clearSelected),
    );
  });
});

describe('on signup start saga', () => {
  it('should trigger on SIGN_UP_START', () => {
    const generator = onSignUpStart();
    expect(generator.next().value).toEqual(takeLatest(SIGN_UP_START, signUp));
  });
});

describe('on signup success saga', () => {
  it('should trigger on SIGN_UP_SUCCESS', () => {
    const generator = onSignUpSuccess();
    expect(generator.next().value).toEqual(
      takeLatest(SIGN_UP_SUCCESS, signInAfterSignUp),
    );
  });
});

describe('on signout start saga', () => {
  it('should trigger on SIGN_UP_START', () => {
    const generator = onSignOutStart();
    expect(generator.next().value).toEqual(takeLatest(SIGN_OUT_START, signOut));
  });
});

describe('on email sign in start saga', () => {
  it('should trigger on EMAIL_SIGN_IN_START', () => {
    const generator = onEmailSignInStart();
    expect(generator.next().value).toEqual(
      takeLatest(EMAIL_SIGN_IN_START, signInWithEmail),
    );
  });
});

describe('on google sign in start saga', () => {
  it('should trigger on GOOGLE_SIGN_IN_START', () => {
    const generator = onGoogleSignInStart();
    expect(generator.next().value).toEqual(
      takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle),
    );
  });
});

describe('on sign up saga', () => {
  const mockEmail = 'tiempo@gmail.com';
  const mockPassword = 'test123';
  const mockDisplayName = 'testTiempo';

  const mockAction = {
    payload: {
      email: mockEmail,
      password: mockPassword,
      displayName: mockDisplayName,
    },
  };

  const generator = signUp(mockAction);

  it('should call auth.createUserWithEmailAndPassword', () => {
    const createUserWithEmailAndPassword = jest.spyOn(
      auth,
      'createUserWithEmailAndPassword',
    );
    generator.next();
    expect(createUserWithEmailAndPassword).toHaveBeenCalled();
  });
});

describe('on sign out saga', () => {
  const generator = signOut();

  it('should call auth.signOut', () => {
    const expectSignOut = jest.spyOn(auth, 'signOut');
    generator.next();
    expect(expectSignOut).toHaveBeenCalled();
  });

  it('should call signOutSuccess', () => {
    expect(generator.next().value).toEqual(put({ type: SIGN_OUT_SUCCESS }));
  });

  it('should call signOutFailure on error', () => {
    const newGenerator = signOut();
    newGenerator.next();
    expect(newGenerator.throw('error').value).toEqual(
      put({ type: SIGN_OUT_FAILED, payload: 'error' }),
    );
  });
});
