import { addPinned, deletePinned } from '../../firebase/firebase.utils';
import { PIN_MUNICIPALITY, SET_CURRENT_USER, UNPIN_MUNICIPALITY } from './userConstants';

const initialState = {
  currentUser: null,
  pinned: [],
};

export const user = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
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
