import './index.scss';
import '@elastic/eui/dist/eui_theme_light.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import App from './App';
import { requestMunicipalities, requestSaved, requestSelected, searchMunicipalities } from './redux/reducers';
import reportWebVitals from './reportWebVitals';

const logger = createLogger();
const rootReducer = combineReducers({
  searchMunicipalities,
  requestMunicipalities,
  requestSelected,
  requestSaved,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    ,
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
