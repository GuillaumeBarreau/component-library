import React from "react";
import { shallow } from "enzyme";
import { Button } from "../button";
import { ComponentButtonProps } from "../button.d";

describe("Button", () => {
  let defaultProps: JSX.IntrinsicAttributes & ComponentButtonProps;

  beforeEach(() => {
    defaultProps = {
      className: "",
      handleClick: jest.fn(),
      notice: "default",
      iconName: "coffee",
      isBlock: false,
      type: "",
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

  it("Should contain defaultProps:status correctly", () => {
    const wrapper = shallow(<Button {...defaultProps} />);
    expect(() => wrapper).not.toThrow();
    expect(wrapper.html()).toContain("button-default");
  });

  it("Should contain defaultProps:Notice with following value disabled correctly", () => {
    const wrapper = shallow(<Button {...defaultProps} notice="disabled" />);
    expect(wrapper.html()).toContain("disabled");
  });

  it("Should showing element svg correctly if defaultProps:iconName contain a value", () => {
    const wrapper = shallow(<Button {...defaultProps} />);
    expect(wrapper.html()).toContain("svg");
  });

  it("Event click should be called one time", () => {
    const wrapper = shallow(<Button {...defaultProps} />);
    wrapper.find("button").simulate("click");
    expect(defaultProps.handleClick).toHaveBeenCalledTimes(1);
  });
});
