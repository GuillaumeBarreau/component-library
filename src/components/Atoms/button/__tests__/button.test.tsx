import React from "react";
import { shallow, mount } from "enzyme";
import { Button } from "../button";
import { ComponentButtonProps } from "../button.d";

describe("Button", () => {
  let defaultProps: JSX.IntrinsicAttributes & ComponentButtonProps;

  beforeEach(() => {
    defaultProps = {
      className: "override-class",
      handleClick: jest.fn(),
      notice: "default",
      iconName: "check-square",
      isBlock: false,
      children: "Button",
    };
  });

  it("renders correctly", () => {
    const wrapper = shallow(<Button {...defaultProps} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it("mount correctly", () => {
    const wrapper = shallow(<Button {...defaultProps} />);
    expect(() => wrapper).not.toThrow();
  });

  it("Should contain defaultProps:children correctly", () => {
    const wrapper = shallow(<Button {...defaultProps} />);
    expect(() => wrapper).not.toThrow();
    expect(wrapper.html()).toContain("Button");
  });

  it("Should contain defaultProps:className correctly", () => {
    const wrapper = shallow(<Button {...defaultProps} />);
    expect(wrapper.html()).toContain("override-class");
  });

  it("Should contain defaultProps:status correctly", () => {
    const wrapper = mount(<Button {...defaultProps} />);
    expect(() => wrapper).not.toThrow();
    expect(wrapper.html()).toContain("button--notice-default");
  });

  it("Should contain Props:Notice with following value disabled", () => {
    const wrapper = shallow(<Button {...defaultProps} notice="disabled" />);
    expect(wrapper.html()).toContain("disabled");
  });

  it("Event click should be called one time", () => {
    const wrapper = shallow(<Button {...defaultProps} />);
    wrapper.find("button").simulate("click");
    expect(defaultProps.handleClick).toHaveBeenCalledTimes(1);
  });
});
