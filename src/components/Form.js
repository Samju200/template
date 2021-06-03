import React from 'react';
import './Form.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  searchName,
  orderName,
  orderDate,
  orderCategory,
} from '../actions/templateAction';

import { FaSearch } from 'react-icons/fa';

function Form() {
  const orders = ['Default', 'Ascending', 'Descending'];
  const dispatch = useDispatch();
  const { activeTemplates } = useSelector((state) => state.template);
  const categories = [
    'All',
    ...new Set(
      activeTemplates
        .map((template) => template.category)
        .join(',')
        .split(',')
    ),
  ];

  const searchChange = (e) => {
    dispatch(searchName(e.target.value));
  };
  const orderChangeName = (e) => {
    dispatch(orderName(e.target.value));
  };
  const orderChangeDate = (e) => {
    dispatch(orderDate(e.target.value));
  };
  const orderChangeCategory = (e) => {
    dispatch(orderCategory(e.target.value));
  };

  return (
    <div className="form">
      <div className="search_form">
        <input
          type="text"
          placeholder="Search Template"
          onChange={searchChange}
        />
        <p>
          <FaSearch />
        </p>
      </div>
      <div className="sort_form">
        <p className="sort_out sort_by">Sort by:</p>
        <div className="sort_out">
          <fieldset>
            <legend>Category</legend>
            <select className="sort_select" onChange={orderChangeCategory}>
              {categories.map((category, index) => {
                return (
                  <option key={index} value={category}>
                    {category}
                  </option>
                );
              })}
            </select>
          </fieldset>
        </div>
        <div className="sort_out">
          <fieldset>
            <legend>Order</legend>

            <select className="sort_select" onChange={orderChangeName}>
              {orders.map((order, index) => {
                return (
                  <option key={index} value={order}>
                    {order}
                  </option>
                );
              })}
            </select>
          </fieldset>
        </div>
        <div className="sort_out">
          <fieldset>
            <legend>Date</legend>
            <select className="sort_select" onChange={orderChangeDate}>
              {orders.map((order, index) => {
                return (
                  <option key={index} value={order}>
                    {order}
                  </option>
                );
              })}
            </select>
          </fieldset>
        </div>
      </div>
    </div>
  );
}

export default Form;
