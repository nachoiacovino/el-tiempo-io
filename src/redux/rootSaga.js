import { all, call } from 'redux-saga/effects';

import { setRequestMunicipalities, setRequestSelected } from './sagas';

export default function* rootSaga() {
  yield all([call(setRequestMunicipalities), call(setRequestSelected)]);
}
