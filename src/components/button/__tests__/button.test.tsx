import React, { Component } from 'react';
import { mount, shallow } from 'enzyme';
import { act } from 'react-dom/test-utils';
import Button from '../button';
import { ComponentButtonProps } from '../button.d';

describe('Button', () => {
  let defaultProps: JSX.IntrinsicAttributes & ComponentButtonProps;

  beforeEach(() => {
    defaultProps = {
      className: "",
      handleClick: jest.fn(),
      iconName: "",
      type: "",
      status: undefined,
      children: "Button"
    }
  });

  it('renders correctly', () => {
    const wrapper = shallow(
      <Button {...defaultProps}/>
    );
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('mount correctly', () => {
    const wrapper = shallow(
      <Button {...defaultProps} />
    );
    expect(() => wrapper).not.toThrow();
  });

  it('to contain defaultProps:children correctly', () => {
    const wrapper = shallow(
      <Button {...defaultProps} />
    );
    expect(() => wrapper).not.toThrow();
    expect(wrapper.html()).toContain('Button');
  });

  it('to contain defaultProps:status correctly', () => {
    const wrapper = shallow(
      <Button {...defaultProps} />
    );
    expect(() => wrapper).not.toThrow();
    expect(wrapper.html()).toContain('button-default');
  });

});