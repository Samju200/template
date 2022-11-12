import * as ACTION from '../constants/paginationConstant';

export const nextPage = () => {
  return { type: ACTION.NEXT_PAGE };
};

export const prevPage = () => {
  return { type: ACTION.PREVIOUS_PAGE };
};
