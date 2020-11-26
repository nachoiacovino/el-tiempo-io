import { put, takeLatest } from 'redux-saga/effects';

import elTiempo from '../api/elTiempo';
import {
  REQUEST_MUNICIPALITIES_FAILED,
  REQUEST_MUNICIPALITIES_PENDING,
  REQUEST_MUNICIPALITIES_SUCCESS,
  REQUEST_SELECTED_FAILED,
  REQUEST_SELECTED_PENDING,
  REQUEST_SELECTED_SUCCESS,
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

function* setRequestSelectedAsync({ payload }) {
  try {
    const res = yield elTiempo.get(
      `provincias/${payload[0].codprov}/municipios/${payload[0].codigoine.slice(
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
  }
}

export function* setRequestSelected() {
  yield takeLatest(REQUEST_SELECTED_PENDING, setRequestSelectedAsync);
}
