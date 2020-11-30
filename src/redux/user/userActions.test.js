import {
  clearPinned,
  emailSignInStart,
  googleSignInStart,
  pinMunicipality,
  signInFailed,
  signOutStart,
  signUpStart,
  signUpSuccess,
  unpinMunicipality,
  updatePinnedStart,
} from './userActions';
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
  UPDATE_PINNED_START,
} from './userConstants';

describe('userActions', () => {
  const mockMunicipality = {
    id: '123',
    codprov: '01',
    codigoine: '01003000000',
    municipio: { ID_REL: '456' },
  };

  it('should create an action to pin municipality', () => {
    const expectedAction = {
      type: PIN_MUNICIPALITY,
      payload: mockMunicipality,
    };
    expect(pinMunicipality(expectedAction.payload)).toEqual(expectedAction);
  });

  it('should create an action to unpin municipality', () => {
    const expectedAction = {
      type: UNPIN_MUNICIPALITY,
      payload: mockMunicipality,
    };
    expect(unpinMunicipality(expectedAction.payload)).toEqual(expectedAction);
  });

  it('should create an action to clear pinned', () => {
    const expectedAction = {
      type: CLEAR_PINNED,
    };
    expect(clearPinned()).toEqual(expectedAction);
  });

  it('should create an action to sign up start', () => {
    const mockUserCredentials = {
      displayName: 'testName',
      email: 'name@test.com',
      password: '123',
    };

    const expectedAction = {
      type: SIGN_UP_START,
      payload: mockUserCredentials,
    };

    expect(signUpStart(expectedAction.payload)).toEqual(expectedAction);
  });

  it('should create an action to sign up success', () => {
    const mockPayload = {
      user: { email: 'name@test.com', password: '123' },
      additionalData: {
        displayName: 'testName',
      },
    };

    const expectedAction = {
      type: SIGN_UP_SUCCESS,
      payload: mockPayload,
    };

    expect(signUpSuccess(expectedAction.payload)).toEqual(expectedAction);
  });

  it('should create an action to google sign in start', () => {
    const expectedAction = {
      type: GOOGLE_SIGN_IN_START,
    };
    expect(googleSignInStart()).toEqual(expectedAction);
  });

  it('should create an action to email sign in start', () => {
    const mockEmailAndPassword = {
      email: 'test@test.com',
      password: 'testPassword',
    };

    const expectedAction = {
      type: EMAIL_SIGN_IN_START,
      payload: mockEmailAndPassword,
    };
    expect(emailSignInStart(expectedAction.payload)).toEqual(expectedAction);
  });

  it('should create an action to sign in failed', () => {
    const mockError = 'error';

    const expectedAction = {
      type: SIGN_IN_FAILED,
      payload: mockError,
    };
    expect(signInFailed(expectedAction.payload)).toEqual(expectedAction);
  });

  it('should create an action to sign out start', () => {
    const expectedAction = {
      type: SIGN_OUT_START,
    };
    expect(signOutStart()).toEqual(expectedAction);
  });

  it('should create an action to update pinned start', () => {
    const mockMunicipality = {
      id: '123',
      codprov: '01',
      codigoine: '01003000000',
      municipio: { ID_REL: '456' },
    };

    const expectedAction = {
      type: UPDATE_PINNED_START,
      payload: [mockMunicipality],
    };
    expect(updatePinnedStart(expectedAction.payload)).toEqual(expectedAction);
  });
});
