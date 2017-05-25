import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import 'regenerator-runtime/runtime';

import configureStore from './store/configureStore';
import routes from './routes';
import rootSaga from './sagas';

let state = window.__initialState__;
const store = configureStore(browserHistory, state);
const history = syncHistoryWithStore(browserHistory, store);
store.runSaga(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
