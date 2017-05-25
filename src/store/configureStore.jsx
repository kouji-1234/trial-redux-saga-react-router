import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
import sagaMonitor from '../sagaMonitor';

// export default function configureStore(history, initialState) {
//   const store = createStore(
//     rootReducer,
//     initialState,
//     compose(
//       applyMiddleware(routerMiddleware(history))
//     )
//   );

//   return store;
// }

export default function configureStore(history, initialState) {
  const sagaMiddleware = createSagaMiddleware({sagaMonitor});
  return {
    ...createStore(
      rootReducer, 
      initialState,
      applyMiddleware(sagaMiddleware),
      compose(
        applyMiddleware(routerMiddleware(history))
      )
    ),
    runSaga: sagaMiddleware.run
  };
}