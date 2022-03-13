import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import authReducer from './users/users';

const reducer = combineReducers({
  authReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger),
);

export default store;
