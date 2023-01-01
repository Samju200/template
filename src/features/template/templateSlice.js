import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  loading: true,
  templates: [],
  activeTemplates: [],
  text: 'All',
  error: '',
};
export const fetchTemplate = createAsyncThunk(
  'template/fetchTemplate',
  async () => {
    return axios
      .get(
        `https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates`
      )
      .then((response) => response.data);
  }
);

function orderSort(property, order) {
  return function (a, b) {
    if (order === 'Ascending' && a[property] < b[property]) {
      return -1;
    } else if (order === 'Ascending' && a[property] > b[property]) {
      return 1;
    } else if (order === 'Descending' && a[property] > b[property]) {
      return -1;
    } else if (order === 'Descending' && a[property] < b[property]) {
      return 1;
    } else {
      return 0;
    }
  };
}
const templateSlice = createSlice({
  name: 'template',
  initialState,
  reducers: {
    searchName: (state, action) => {
      let search = state.templates.filter((template) =>
        template.name.includes(action.payload)
      );

      state.activeTemplates = search;
    },
    orderCategory: (state, action) => {
      let orderCategory = state.templates.filter((template) => {
        if (action.payload === 'All') {
          return template;
        } else {
          return template.category.includes(action.payload);
        }
      });

      state.activeTemplates = orderCategory;
      state.text = action.payload;
    },
    orderName: (state, action) => {
      let orderName = state.templates.filter((template) =>
        state.text === 'All' || template.category.includes(state.text)
          ? template
          : null
      );

      state.activeTemplates = orderName.sort(orderSort('name', action.payload));
    },
    orderDate: (state, action) => {
      let orderDate = state.templates.filter((template) =>
        state.text === 'All' || template.category.includes(state.text)
          ? template
          : null
      );
      state.loading = false;
      state.activeTemplates = orderDate.sort(
        orderSort('created', action.payload)
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTemplate.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchTemplate.fulfilled, (state, action) => {
      state.loading = false;
      state.templates = action.payload;
      state.activeTemplates = action.payload;
      state.text = 'ALL';
    });
    builder.addCase(fetchTemplate.rejected, (state, action) => {
      state.loading = false;
      state.templates = '';
      state.activeTemplates = '';
      state.error = action.error.message;
    });
  },
});
export const { searchName, orderCategory, orderName, orderDate } =
  templateSlice.actions;

export default templateSlice.reducer;
