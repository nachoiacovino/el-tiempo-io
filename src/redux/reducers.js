import {
  CHANGE_SEARCH_FIELD,
  REQUEST_MUNICIPALITIES_FAILED,
  REQUEST_MUNICIPALITIES_PENDING,
  REQUEST_MUNICIPALITIES_SUCCESS,
  REQUEST_SAVED_FAILED,
  REQUEST_SAVED_PENDING,
  REQUEST_SAVED_SUCCESS,
  REQUEST_SELECTED_FAILED,
  REQUEST_SELECTED_PENDING,
  REQUEST_SELECTED_SUCCESS,
} from './constants';

const initialStateSearch = {
  searchField: '',
};

export const searchMunicipalities = (
  state = initialStateSearch,
  { type, payload },
) => {
  switch (type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: payload };
    default:
      return state;
  }
};

const initialStateRequest = {
  isPending: false,
  municipalities: [],
  error: '',
};

export const requestMunicipalities = (
  state = initialStateRequest,
  { type, payload },
) => {
  switch (type) {
    case REQUEST_MUNICIPALITIES_PENDING:
      return { ...state, isPending: true };
    case REQUEST_MUNICIPALITIES_SUCCESS:
      return { ...state, municipalities: payload, isPending: false };
    case REQUEST_MUNICIPALITIES_FAILED:
      return { ...state, error: payload, isPending: false };
    default:
      return state;
  }
};

const initialStateSelected = {
  isPending: false,
  selected: null,
  error: '',
};

export const requestSelected = (
  state = initialStateSelected,
  { type, payload },
) => {
  switch (type) {
    case REQUEST_SELECTED_PENDING:
      return { ...state, isPending: true };
    case REQUEST_SELECTED_SUCCESS:
      return { ...state, selected: payload, isPending: false };
    case REQUEST_SELECTED_FAILED:
      return { ...state, error: payload, isPending: false };
    default:
      return state;
  }
};

const initialStateSaved = {
  isPending: false,
  saved: null,
  error: '',
};

export const requestSaved = (state = initialStateSaved, { type, payload }) => {
  switch (type) {
    case REQUEST_SAVED_PENDING:
      return { ...state, isPending: true };
    case REQUEST_SAVED_SUCCESS:
      return { ...state, saved: payload, isPending: false };
    case REQUEST_SAVED_FAILED:
      return { ...state, error: payload, isPending: false };
    default:
      return state;
  }
};
