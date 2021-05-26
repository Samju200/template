import * as ACTION from '../constants/templateConstant';
import Axios from 'axios';

export const fetchTemplate = (text) => async (dispatch) => {
  dispatch({
    type: ACTION.TEMPLATE_REQUEST,
  });
  try {
    const { data } = await Axios.get(
      `https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates`
    );
    dispatch({ type: ACTION.TEMPLATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ACTION.TEMPLATE_FAIL, payload: error.message });
  }
};

export const searchName = (text) => (dispatch) => {
  dispatch({
    type: ACTION.SEARCH_NAME,
    payload: text,
  });
};
export const orderCategory = (text) => (dispatch) => {
  dispatch({
    type: ACTION.ORDER_CATEGORY,
    payload: text,
  });
};
export const orderName = (name) => (dispatch) => {
  dispatch({
    type: ACTION.ORDER_NAME,
    payload: name,
  });
};
export const orderDate = (name) => (dispatch) => {
  dispatch({
    type: ACTION.ORDER_DATE,
    payload: name,
  });
};
