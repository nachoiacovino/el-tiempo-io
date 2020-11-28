import { all, call, put, takeLatest } from 'redux-saga/effects';

import { CLEAR_SELECTED } from '../constants';
import { PIN_MUNICIPALITY } from './userConstants';

function* clearSelected() {
  yield put({ type: CLEAR_SELECTED });
}

function* watchPin() {
  yield takeLatest(PIN_MUNICIPALITY, clearSelected);
}

export default function* userSagas() {
  yield all([call(watchPin)]);
}
