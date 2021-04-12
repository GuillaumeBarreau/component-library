import React, { Component } from 'react';
import { mount, shallow } from 'enzyme';
import { act } from 'react-dom/test-utils';
import Typography from '../typography';
import { ComponentTypographyProps } from '../typography.d';

describe('Button', () => {
  let defaultProps: JSX.IntrinsicAttributes & ComponentTypographyProps;

  beforeEach(() => {
    defaultProps = {
      className: "",
      font: "light",
      size: "medium",
      children: "Typography"
    }
  });

  it('renders correctly', () => {
    const wrapper = shallow(
      <Typography {...defaultProps}/>
    );
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('mount correctly', () => {
    const wrapper = shallow(
      <Typography {...defaultProps} />
    );
    expect(() => wrapper).not.toThrow();
  });

  it('to contain defaultProps:children correctly', () => {
    const wrapper = shallow(
      <Typography {...defaultProps} />
    );
    expect(() => wrapper).not.toThrow();
    expect(wrapper.html()).toContain('Typography');
  });

  it('to contain defaultProps:size correctly', () => {
    const wrapper = shallow(
      <Typography {...defaultProps} />
    );
    expect(() => wrapper).not.toThrow();
    expect(wrapper.html()).toContain('typography-medium');
  });

  it('to contain defaultProps:font correctly', () => {
    const wrapper = shallow(
      <Typography {...defaultProps} />
    );
    expect(() => wrapper).not.toThrow();
    expect(wrapper.html()).toContain('typography-light');
  });

});