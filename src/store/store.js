
import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import reducers from './../reducers';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store
