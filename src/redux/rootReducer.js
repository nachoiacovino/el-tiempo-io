import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { currentUser, requestMunicipalities, requestSelected, setPinned } from './reducers';

const persistConfig = { key: 'root', storage, whitelist: ['pinned'] };

const rootReducer = combineReducers({
  requestMunicipalities,
  requestSelected,
  user: currentUser,
  pinned: setPinned,
});

export default persistReducer(persistConfig, rootReducer);
