import { configureStore } from '@reduxjs/toolkit';
import templateReducer from '../features/template/templateSlice';
import paginationReducer from '../features/pagination/paginationSlice';

export const store = configureStore({
  reducer: {
    template: templateReducer,
    pagination: paginationReducer,
  },
});

export default store;
