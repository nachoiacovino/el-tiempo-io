import {
  REQUEST_MUNICIPALITIES_FAILED,
  REQUEST_MUNICIPALITIES_PENDING,
  REQUEST_MUNICIPALITIES_SUCCESS,
  REQUEST_SELECTED_FAILED,
  REQUEST_SELECTED_PENDING,
  REQUEST_SELECTED_SUCCESS,
} from './constants';
import { requestMunicipalities, requestSelected } from './reducers';

describe('requestMunicipalities', () => {
  const initialState = {
    isPending: false,
    municipalities: [],
    error: null,
  };

  it('should return the initial state', () => {
    expect(requestMunicipalities(undefined, {})).toEqual(initialState);
  });

  it('should handle REQUEST_MUNICIPALITIES_PENDING', () => {
    expect(
      requestMunicipalities(initialState, {
        type: REQUEST_MUNICIPALITIES_PENDING,
      }),
    ).toEqual({
      isPending: true,
      municipalities: [],
      error: null,
    });
  });

  it('should handle REQUEST_MUNICIPALITIES_SUCCESS', () => {
    const mockPayload = [
      {
        id: '123',
        codprov: '01',
        codigoine: '01003000000',
      },
    ];

    expect(
      requestMunicipalities(initialState, {
        type: REQUEST_MUNICIPALITIES_SUCCESS,
        payload: mockPayload,
      }),
    ).toEqual({
      isPending: false,
      municipalities: mockPayload,
      error: null,
    });
  });

  it('should handle REQUEST_MUNICIPALITIES_FAILED', () => {
    const mockPayload = 'error';

    expect(
      requestMunicipalities(initialState, {
        type: REQUEST_MUNICIPALITIES_FAILED,
        payload: mockPayload,
      }),
    ).toEqual({
      isPending: false,
      municipalities: [],
      error: mockPayload,
    });
  });
});

describe('requestSelected', () => {
  const initialState = {
    isPending: false,
    selected: null,
    error: null,
  };

  it('should return the initial state', () => {
    expect(requestSelected(undefined, {})).toEqual(initialState);
  });

  it('should handle REQUEST_SELECTED_PENDING', () => {
    expect(
      requestSelected(initialState, {
        type: REQUEST_SELECTED_PENDING,
      }),
    ).toEqual({
      isPending: true,
      selected: null,
      error: null,
    });
  });

  it('should handle REQUEST_SELECTED_SUCCESS', () => {
    const mockPayload = [
      {
        id: '123',
        codprov: '01',
        codigoine: '01003000000',
      },
    ];

    expect(
      requestSelected(initialState, {
        type: REQUEST_SELECTED_SUCCESS,
        payload: mockPayload,
      }),
    ).toEqual({
      isPending: false,
      selected: mockPayload,
      error: null,
    });
  });

  it('should handle REQUEST_SELECTED_FAILED', () => {
    const mockPayload = 'error';

    expect(
      requestSelected(initialState, {
        type: REQUEST_SELECTED_FAILED,
        payload: mockPayload,
      }),
    ).toEqual({
      isPending: false,
      selected: null,
      error: mockPayload,
    });
  });
});
