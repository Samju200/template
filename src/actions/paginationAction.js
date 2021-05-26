import * as ACTION from '../constants/paginationConstant';

export const nextpage = () => {
  return { type: ACTION.NEXT_PAGE };
};

export const prevpage = () => {
  return { type: ACTION.PREVIOUS_PAGE };
};
