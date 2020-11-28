import { addPinned, deletePinned } from '../../firebase/firebase.utils';
import {
  EMAIL_SIGN_IN_FAILED,
  EMAIL_SIGN_IN_SUCCESS,
  GOOGLE_SIGN_IN_FAILED,
  GOOGLE_SIGN_IN_SUCCESS,
  PIN_MUNICIPALITY,
  UNPIN_MUNICIPALITY,
} from './userConstants';

const initialState = {
  currentUser: null,
  pinned: [],
  error: null,
};

export const user = (state = initialState, { type, payload }) => {
  switch (type) {
    case GOOGLE_SIGN_IN_SUCCESS:
    case EMAIL_SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
        error: null,
      };
    case GOOGLE_SIGN_IN_FAILED:
    case EMAIL_SIGN_IN_FAILED:
      return {
        ...state,
        error: payload,
      };
    case PIN_MUNICIPALITY:
      if (state.currentUser) {
        addPinned(payload, state.currentUser.id);
        return state;
      }
      return {
        ...state,
        pinned: [...state.pinned, { ...payload }],
      };
    case UNPIN_MUNICIPALITY:
      if (state.currentUser) {
        deletePinned(payload, state.currentUser.id);
        return state;
      }
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
