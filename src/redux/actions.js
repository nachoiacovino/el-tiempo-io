import elTiempo from '../api/elTiempo';
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_PROVINCES_FAILED,
  REQUEST_PROVINCES_PENDING,
  REQUEST_PROVINCES_SUCCESS,
} from './constants';

export const setSearchField = (payload) => ({
  type: CHANGE_SEARCH_FIELD,
  payload,
});

export const setRequestProvinces = () => (dispatch) => {
  dispatch({ type: REQUEST_PROVINCES_PENDING });
  const fetchData = async () => {
    try {
      const res = await elTiempo.get('provincias');
      dispatch({
        type: REQUEST_PROVINCES_SUCCESS,
        payload: res.data.provincias,
      });
    } catch (error) {
      dispatch({ type: REQUEST_PROVINCES_FAILED, payload: error });
    }
  };
  return fetchData();
};
