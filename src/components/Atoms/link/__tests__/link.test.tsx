import React from 'react';
import { shallow } from 'enzyme';
import { Link } from '../link';
import { ComponentLinkProps } from '../link.d';

describe('Link', () => {
  let defaultProps: JSX.IntrinsicAttributes & ComponentLinkProps;

  beforeEach(() => {
    defaultProps = {
      children: "Link"
    }
  });

  it('renders correctly', () => {
    const wrapper = shallow(
      <Link {...defaultProps}/>
    );
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('mount correctly', () => {
    const wrapper = shallow(
      <Link {...defaultProps} />
    );
    expect(() => wrapper).not.toThrow();
  });

  it('Should contain defaultProps:children correctly', () => {
    const wrapper = shallow(
      <Link {...defaultProps} />
    );
    expect(() => wrapper).not.toThrow();
    expect(wrapper.html()).toContain('Link');
  });

});