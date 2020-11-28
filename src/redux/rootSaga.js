import { all, call } from 'redux-saga/effects';

import mainSagas from './sagas';
import userSagas from './user/userSagas';

export default function* rootSaga() {
  yield all([call(mainSagas), call(userSagas)]);
}
