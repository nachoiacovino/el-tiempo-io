import elTiempo from '../api/elTiempo';
import {
  REQUEST_MUNICIPALITIES_FAILED,
  REQUEST_MUNICIPALITIES_PENDING,
  REQUEST_MUNICIPALITIES_SUCCESS,
  REQUEST_SELECTED_FAILED,
  REQUEST_SELECTED_PENDING,
  REQUEST_SELECTED_SUCCESS,
} from './constants';

export const setRequestMunicipalities = () => (dispatch) => {
  dispatch({ type: REQUEST_MUNICIPALITIES_PENDING });
  const fetchData = async () => {
    try {
      const res = await elTiempo.get('municipios');
      dispatch({
        type: REQUEST_MUNICIPALITIES_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({ type: REQUEST_MUNICIPALITIES_FAILED, payload: error });
    }
  };
  return fetchData();
};

export const setRequestSelected = (payload) => (dispatch) => {
  dispatch({ type: REQUEST_SELECTED_PENDING });
  const fetchData = async () => {
    try {
      const res = await elTiempo.get(
        `provincias/${
          payload[0].CODPROV
        }/municipios/${payload[0].CODIGOINE.slice(0, 5)}`,
      );
      dispatch({
        type: REQUEST_SELECTED_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({ type: REQUEST_SELECTED_FAILED, payload: error });
    }
  };
  return fetchData();
};

export const setRequestSaved = () => {
  //
};
