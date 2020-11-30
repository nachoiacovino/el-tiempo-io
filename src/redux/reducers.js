import {
  CLEAR_SELECTED,
  REQUEST_MUNICIPALITIES_FAILED,
  REQUEST_MUNICIPALITIES_PENDING,
  REQUEST_MUNICIPALITIES_SUCCESS,
  REQUEST_SELECTED_FAILED,
  REQUEST_SELECTED_PENDING,
  REQUEST_SELECTED_SUCCESS,
} from './constants';

export const initialStateRequest = {
  isPending: false,
  municipalities: [],
  error: null,
};

export const requestMunicipalities = (
  state = initialStateRequest,
  { type, payload },
) => {
  switch (type) {
    case REQUEST_MUNICIPALITIES_PENDING:
      return { ...state, isPending: true };
    case REQUEST_MUNICIPALITIES_SUCCESS:
      return {
        ...state,
        municipalities: payload,
        error: null,
        isPending: false,
      };
    case REQUEST_MUNICIPALITIES_FAILED:
      return { ...state, error: payload, isPending: false };
    default:
      return state;
  }
};

export const initialStateSelected = {
  isPending: false,
  selected: null,
  error: null,
};

export const requestSelected = (
  state = initialStateSelected,
  { type, payload },
) => {
  switch (type) {
    case REQUEST_SELECTED_PENDING:
      return { ...state, isPending: true };
    case REQUEST_SELECTED_SUCCESS:
      return { ...state, selected: payload, error: null, isPending: false };
    case REQUEST_SELECTED_FAILED:
      return { ...state, error: payload, isPending: false };
    case CLEAR_SELECTED:
      return { ...state, selected: null, error: null, isPending: false };
    default:
      return state;
  }
};
