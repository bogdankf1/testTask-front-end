import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers/index'

export default function configureStore(initialState) {
  const logger = createLogger();
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(logger))
  return store
}
