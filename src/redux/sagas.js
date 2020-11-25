import { takeEvery } from 'redux-saga/effects';

import { REQUEST_MUNICIPALITIES_PENDING } from './constants';

export function* setRequestMnpsAsync() {
  yield console.log('I am fired');
}

export function* setRequestMunicipalities() {
  yield takeEvery(REQUEST_MUNICIPALITIES_PENDING, setRequestMnpsAsync);
}
