import { put, takeLatest } from 'redux-saga/effects';

import elTiempo from '../api/elTiempo';
import {
  REQUEST_MUNICIPALITIES_FAILED,
  REQUEST_MUNICIPALITIES_PENDING,
  REQUEST_MUNICIPALITIES_SUCCESS,
  REQUEST_SELECTED_PENDING,
} from './constants';

function* setRequestMnpsAsync() {
  try {
    const res = yield elTiempo.get('municipios');
    yield put({
      type: REQUEST_MUNICIPALITIES_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    yield put({ type: REQUEST_MUNICIPALITIES_FAILED, payload: error });
  }
}

export function* setRequestMunicipalities() {
  yield takeLatest(REQUEST_MUNICIPALITIES_PENDING, setRequestMnpsAsync);
}

function* setRequestSelectedAsync(action) {
  /*   try {
    const res = yield elTiempo.get(
      `provincias/${payload[0].CODPROV}/municipios/${payload[0].CODIGOINE.slice(
        0,
        5,
      )}`,
    );
    yield put({
      type: REQUEST_SELECTED_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    yield put({ type: REQUEST_SELECTED_FAILED, payload: error });
  } */
}

export function* setRequestSelected() {
  yield takeLatest(REQUEST_SELECTED_PENDING, setRequestSelectedAsync);
}
