

import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
import rootReducer from "./rootReducer";
import { rootSaga } from "./rootSaga";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const isDevelopment = process.env.NODE_ENV === "development";
const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();
const middleware = isDevelopment
  ? applyMiddleware(sagaMiddleware, loggerMiddleware)
  : applyMiddleware(sagaMiddleware);

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(middleware));

sagaMiddleware.run(rootSaga);

export default store;
