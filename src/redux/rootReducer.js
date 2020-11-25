import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { currentUser, requestMunicipalities, requestSaved, requestSelected } from './reducers';

const persistConfig = { key: 'root', storage, whitelist: ['cart'] };

const rootReducer = combineReducers({
  requestMunicipalities,
  requestSelected,
  requestSaved,
  currentUser,
});

export default persistReducer(persistConfig, rootReducer);
