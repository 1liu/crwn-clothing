import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
//import thunk from 'redux-thunk'

import createSagaMiddleware from 'redux-saga'
// import { fetchCollectionsStart } from './shop/shop.sagas'
import rootSage from './root-saga'
import { persistStore } from 'redux-persist'
import rootReducer from './root-reducer'

const initialState = {};
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(...middlewares), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

);

sagaMiddleware.run(rootSage);

export const persistor = persistStore(store);

export default { store, persistor };
