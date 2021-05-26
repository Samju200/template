import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { paginationPageReducer } from './reducers/paginationReducer';
import { templateListReducer } from './reducers/templateReducer';

const reducer = combineReducers({
  template: templateListReducer,
  pagination: paginationPageReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
