import React from 'react';
import { shallow } from 'enzyme';
import { Alert } from '../alert';
import { ComponentAlertProps } from '../alert.d';

describe('Alert', () => {
  let defaultProps: JSX.IntrinsicAttributes & ComponentAlertProps;

  beforeEach(() => {
    defaultProps = {
      children: "Alert"
    }
  });

  it('renders correctly', () => {
    const wrapper = shallow(
      <Alert {...defaultProps}/>
    );
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('mount correctly', () => {
    const wrapper = shallow(
      <Alert {...defaultProps} />
    );
    expect(() => wrapper).not.toThrow();
  });

  it('Should contain defaultProps:children correctly', () => {
    const wrapper = shallow(
      <Alert {...defaultProps} />
    );
    expect(() => wrapper).not.toThrow();
    expect(wrapper.html()).toContain('Alert');
  });

});