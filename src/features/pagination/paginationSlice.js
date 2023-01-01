import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentPage: 1,
  postsPerPage: 15,
};

const paginationSlice = createSlice({
  name: 'template',
  initialState,
  reducers: {
    nextPage: (state) => {
      state.currentPage = +1;
    },
    prevPage: (state) => {
      state.currentPage = -1;
    },
  },
});

export const { nextPage, prevPage } = paginationSlice.actions;
export default paginationSlice.reducer;
