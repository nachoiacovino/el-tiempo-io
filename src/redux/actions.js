import elTiempo from '../api/elTiempo';
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_MUNICIPALITIES_FAILED,
  REQUEST_MUNICIPALITIES_PENDING,
  REQUEST_MUNICIPALITIES_SUCCESS,
} from './constants';

export const setSearchField = (payload) => ({
  type: CHANGE_SEARCH_FIELD,
  payload,
});

export const setRequestMunicipalities = () => (dispatch) => {
  dispatch({ type: REQUEST_MUNICIPALITIES_PENDING });
  const fetchData = async () => {
    try {
      const res = await elTiempo.get('municipios');
      dispatch({ type: REQUEST_MUNICIPALITIES_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: REQUEST_MUNICIPALITIES_FAILED, payload: error });
    }
  };
  return fetchData();
};
