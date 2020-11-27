import { addPinned, deletePinned } from '../firebase/firebase.utils';
import {
  CLEAR_SELECTED,
  PIN_MUNICIPALITY,
  REQUEST_MUNICIPALITIES_FAILED,
  REQUEST_MUNICIPALITIES_PENDING,
  REQUEST_MUNICIPALITIES_SUCCESS,
  REQUEST_SELECTED_FAILED,
  REQUEST_SELECTED_PENDING,
  REQUEST_SELECTED_SUCCESS,
  SET_CURRENT_USER,
  UNPIN_MUNICIPALITY,
} from './constants';

const initialStateUser = {
  currentUser: null,
  pinned: [],
};

export const user = (state = initialStateUser, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    case PIN_MUNICIPALITY:
      if (state.currentUser) addPinned(payload, state.currentUser.id);
      return {
        ...state,
        pinned: [{ ...payload }, ...state.pinned],
      };
    case UNPIN_MUNICIPALITY:
      if (state.currentUser) deletePinned(payload, state.currentUser.id);
      return {
        ...state,
        pinned: state.pinned.filter(
          (mnp) => mnp.municipio.ID_REL !== payload.municipio.ID_REL,
        ),
      };
    default:
      return state;
  }
};

const initialStateRequest = {
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

const initialStateSelected = {
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
