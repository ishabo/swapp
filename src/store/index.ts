import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducers from "./reducers";
import rootSaga from "./sagas";

function initStore() {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(rootReducers, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(rootSaga);

  return store;
}

export { initStore };
