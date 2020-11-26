import { all, call } from 'redux-saga/effects';

import { setRequestMunicipalities, setRequestSelected, watchPin } from './sagas';

export default function* rootSaga() {
  yield all([
    call(setRequestMunicipalities),
    call(setRequestSelected),
    call(watchPin),
  ]);
}
