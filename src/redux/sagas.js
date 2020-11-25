import { put, takeEvery } from 'redux-saga/effects';

import elTiempo from '../api/elTiempo';
import { REQUEST_MUNICIPALITIES_FAILED, REQUEST_MUNICIPALITIES_PENDING, REQUEST_MUNICIPALITIES_SUCCESS } from './constants';

export function* setRequestMunicipalities() {
  yield takeEvery(REQUEST_MUNICIPALITIES_PENDING, setRequestMnpsAsync);
}

export function* setRequestMnpsAsync() {
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
