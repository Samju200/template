import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr } from './../../Utils';
import Alert from './Alert';

const setUp = () => {
  const component = shallow(<Alert />);
  return component;
};

describe('Alert Component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('Should render without errors', () => {
    const wrapper = findByTestAtrr(component, '.alert');
    expect(wrapper.length).toBe(1);
  });

  it('Should render a p', () => {
    const p = findByTestAtrr(component, '.alert-p');
    expect(p.length).toBe(1);
  });
});
