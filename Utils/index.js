// import checkPropTypes from 'check-prop-types';
import { applyMiddleware, createStore } from 'redux';
import { templateListReducer } from './../src/reducers/templateReducer';
import ReduxThunk from 'redux-thunk';
// import { middlewares } from './../src/createStore';

export const findByTestAtrr = (component, attr) => {
  const wrapper = component.find(attr);
  return wrapper;
};

export const checkProps = (component, expectedProps) => {
  const propsErr = checkPropTypes(
    component.propTypes,
    expectedProps,
    'props',
    component.name
  );
  return propsErr;
};
const middlewares = [ReduxThunk];
export const testStore = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore
  );
  return createStoreWithMiddleware(templateListReducer, initialState);
};
