import {
  CHANGE_SEARCH_FIELD,
  REQUEST_MUNICIPALITIES_FAILED,
  REQUEST_MUNICIPALITIES_PENDING,
  REQUEST_MUNICIPALITIES_SUCCESS,
  SET_SELECTED_OPTION,
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

const initialOption = {
  selectedOption: [],
};

export const selectOption = (state = initialOption, { type, payload }) => {
  switch (type) {
    case SET_SELECTED_OPTION:
      return { ...state, selectedOption: payload };
    default:
      return state;
  }
};
