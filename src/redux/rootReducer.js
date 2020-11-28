import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { requestMunicipalities, requestSelected } from './reducers';
import { user } from './user/userReducers';

const persistConfig = { key: 'root', storage, whitelist: ['user'] };

const rootReducer = combineReducers({
  requestMunicipalities,
  requestSelected,
  user,
});

export default persistReducer(persistConfig, rootReducer);
