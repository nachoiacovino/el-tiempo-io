import {
  CHANGE_SEARCH_FIELD,
  REQUEST_PROVINCES_FAILED,
  REQUEST_PROVINCES_PENDING,
  REQUEST_PROVINCES_SUCCESS,
} from './constants';

const initialStateSearch = {
  searchField: '',
};

export const searchProvinces = (
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
  provinces: [],
  error: '',
};

export const requestProvinces = (
  state = initialStateRequest,
  { type, payload },
) => {
  switch (type) {
    case REQUEST_PROVINCES_PENDING:
      return { ...state, isPending: true };
    case REQUEST_PROVINCES_SUCCESS:
      return { ...state, provinces: payload, isPending: false };
    case REQUEST_PROVINCES_FAILED:
      return { ...state, error: payload, isPending: false };
    default:
      return state;
  }
};
