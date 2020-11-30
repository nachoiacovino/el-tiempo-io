import {
  CLEAR_PINNED,
  PIN_MUNICIPALITY,
  SIGN_IN_FAILED,
  SIGN_IN_SUCCESS,
  SIGN_OUT_FAILED,
  SIGN_OUT_SUCCESS,
  SIGN_UP_FAILED,
  UNPIN_MUNICIPALITY,
  UPDATE_PINNED_FAILED,
  UPDATE_PINNED_SUCCESS,
} from './userConstants';
import { initialState, user } from './userReducers';

describe('user', () => {
  const mockMunicipality = {
    id: '123',
    codprov: '01',
    codigoine: '01003000000',
    municipio: { ID_REL: '456' },
  };

  const mockUser = {
    createdAt: { seconds: 1606515106, nanoseconds: 118000000 },
    displayName: 'Test User',
    email: 'testuser@gmail.com',
    id: '123',
  };

  it('should return the initial state', () => {
    expect(user(undefined, {})).toEqual(initialState);
  });

  it('should handle SIGN_IN_SUCCESS', () => {
    expect(
      user(initialState, {
        type: SIGN_IN_SUCCESS,
        payload: mockUser,
      }),
    ).toEqual({
      currentUser: mockUser,
      pinned: [],
      error: null,
    });
  });

  it('should handle SIGN_OUT_SUCCESS', () => {
    expect(
      user(initialState, {
        type: SIGN_OUT_SUCCESS,
      }),
    ).toEqual({
      currentUser: null,
      pinned: [],
      error: null,
    });
  });

  it('should handle any fail', () => {
    const mockError = 'error';

    expect(
      user(initialState, {
        type: SIGN_UP_FAILED,
        payload: mockError,
      }),
    ).toEqual({
      currentUser: null,
      pinned: [],
      error: mockError,
    });

    expect(
      user(initialState, {
        type: SIGN_IN_FAILED,
        payload: mockError,
      }),
    ).toEqual({
      currentUser: null,
      pinned: [],
      error: mockError,
    });

    expect(
      user(initialState, {
        type: SIGN_OUT_FAILED,
        payload: mockError,
      }),
    ).toEqual({
      currentUser: null,
      pinned: [],
      error: mockError,
    });

    expect(
      user(initialState, {
        type: UPDATE_PINNED_FAILED,
        payload: mockError,
      }),
    ).toEqual({
      currentUser: null,
      pinned: [],
      error: mockError,
    });
  });

  it('should handle PIN_MUNICIPALITY', () => {
    expect(
      user(initialState, {
        type: PIN_MUNICIPALITY,
        payload: mockMunicipality,
      }),
    ).toEqual({
      currentUser: null,
      pinned: [mockMunicipality],
      error: null,
    });
  });

  it("shouldn't PIN_MUNICIPALITY when already exists", () => {
    const mockState = {
      currentUser: null,
      pinned: [mockMunicipality],
      error: null,
    };

    expect(
      user(mockState, {
        type: PIN_MUNICIPALITY,
        payload: mockMunicipality,
      }),
    ).toEqual({
      currentUser: null,
      pinned: [mockMunicipality],
      error: null,
    });
  });

  it('should handle UNPIN_MUNICIPALITY', () => {
    const mockState = {
      currentUser: null,
      pinned: [mockMunicipality],
      error: null,
    };

    expect(
      user(mockState, {
        type: UNPIN_MUNICIPALITY,
        payload: mockMunicipality,
      }),
    ).toEqual({
      currentUser: null,
      pinned: [],
      error: null,
    });
  });

  it('should handle CLEAR_PINNED', () => {
    expect(
      user(initialState, {
        type: CLEAR_PINNED,
      }),
    ).toEqual({
      currentUser: null,
      pinned: [],
      error: null,
    });
  });

  it('should handle UPDATE_PINNED_SUCCESS', () => {
    expect(
      user(initialState, {
        type: UPDATE_PINNED_SUCCESS,
        payload: [mockMunicipality],
      }),
    ).toEqual({
      currentUser: null,
      pinned: [mockMunicipality],
      error: null,
    });
  });
});
