import * as ACTION from '../constants/paginationConstant';

export const paginationPageReducer = (
  state = { currentPage: 1, postsPerPage: 15 },
  action
) => {
  switch (action.type) {
    case ACTION.NEXT_PAGE:
      return { ...state, currentPage: state.currentPage + 1 };
    case ACTION.PREVIOUS_PAGE:
      return { ...state, currentPage: state.currentPage - 1 };
    default:
      return state;
  }
};
