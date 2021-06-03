import * as ACTION from '../constants/templateConstant';

export const templateListReducer = (
  state = { loading: true, templates: [], activeTemplates: [], text: 'All' },
  action
) => {
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
  switch (action.type) {
    case ACTION.TEMPLATE_REQUEST:
      return { ...state, loading: true };
    case ACTION.TEMPLATE_SUCCESS:
      return {
        ...state,
        loading: false,
        templates: action.payload,
        activeTemplates: action.payload,
        text: 'All',
      };
    case ACTION.TEMPLATE_FAIL:
      return { ...state, loading: false, error: action.payload };

    case ACTION.SEARCH_NAME:
      let search = state.templates.filter((template) =>
        template.name.includes(action.payload)
      );
      return {
        ...state,
        loading: false,
        activeTemplates: search,
      };
    case ACTION.ORDER_CATEGORY:
      let orderCategory = state.templates.filter((template) => {
        if (action.payload === 'All') {
          return template;
        } else {
          return template.category.includes(action.payload);
        }
      });
      return {
        ...state,
        text: action.payload,
        loading: false,
        activeTemplates: orderCategory,
      };

    case ACTION.ORDER_NAME:
      let orderName = state.templates.filter((template) =>
        state.text === 'All' || template.category.includes(state.text)
          ? template
          : null
      );

      return {
        ...state,
        loading: false,
        activeTemplates: orderName.sort(orderSort('name', action.payload)),
      };
    case ACTION.ORDER_DATE:
      let orderDate = state.templates.filter((template) =>
        state.text === 'All' || template.category.includes(state.text)
          ? template
          : null
      );

      return {
        ...state,
        loading: false,
        activeTemplates: orderDate.sort(orderSort('created', action.payload)),
      };
    default:
      return state;
  }
};
