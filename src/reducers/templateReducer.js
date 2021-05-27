import * as ACTION from '../constants/templateConstant';

export const templateListReducer = (
  state = { loading: true, templates: [], activeTemplates: [], text: '' },
  action
) => {
  function orderSort(property, order) {
    let sort_order = 1;
    if (order === 'Descending') {
      sort_order = -1;
    }
    return function (a, b) {
      if (a[property] < b[property]) {
        return -1 * sort_order;
      } else if (a[property] > b[property]) {
        return 1 * sort_order;
      } else {
        return 0 * sort_order;
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
      let orderName = state.activeTemplates.sort(
        orderSort('name', action.payload)
      );
      if (action.payload === 'Default') {
        return {
          ...state,
          text: '',
          loading: false,
          activeTemplates: state.templates,
        };
      }
      return {
        ...state,
        text: '',
        loading: false,
        activeTemplates: orderName,
      };
    case ACTION.ORDER_DATE:
      let orderDate = state.activeTemplates.sort(
        orderSort('created', action.payload)
      );
      if (action.payload === 'Default') {
        return {
          ...state,
          text: '',
          loading: false,
          activeTemplates: state.templates,
        };
      }
      return {
        ...state,
        text: state.text,
        loading: false,
        activeTemplates: orderDate,
      };
    default:
      return state;
  }
};
