import { all, call } from 'redux-saga/effects';

import { setRequestMunicipalities, setRequestSelected } from './sagas';
import userSagas from './user/userSagas';

export default function* rootSaga() {
  yield all([
    call(setRequestMunicipalities),
    call(setRequestSelected),
    call(userSagas),
  ]);
}
