
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reducers from './../reducers';

const logger = createLogger({
    /* https://github.com/evgenyrodionov/redux-logger */
    collapsed: true,
    diff: true
});

const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(logger)
  )
)

export default store
