import React from "react";
import { shallow } from "enzyme";
import { Alert } from "../alert";
import { ComponentAlertProps, IProgressBarProps } from "../alert.d";

describe("Alert", () => {
  let defaultProps: JSX.IntrinsicAttributes &
    ComponentAlertProps &
    IProgressBarProps;

  beforeEach(() => {
    defaultProps = {
      children: "children Content",
      className: "override-class",
      handleClick: () => null,
      progressBarLabel: true,
      progressBar: 64,
      notice: "info",
    };
  });

  it("renders correctly", () => {
    const wrapper = shallow(<Alert {...defaultProps} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it("mount correctly", () => {
    const wrapper = shallow(<Alert {...defaultProps} />);
    expect(() => wrapper).not.toThrow();
  });

  it("Should contain defaultProps:children correctly", () => {
    const wrapper = shallow(<Alert {...defaultProps} />);
    expect(() => wrapper).not.toThrow();
    expect(wrapper.html()).toContain("children Content");
  });

  it("Should contain defaultProps:className correctly", () => {
    const wrapper = shallow(<Alert {...defaultProps} />);
    expect(wrapper.html()).toContain("override-class");
  });

  it("Should contain defaultProps:progressBar correctly", () => {
    const wrapper = shallow(<Alert {...defaultProps} />);
    expect(wrapper.html()).toContain("width:64%");
  });

  it("Should contain defaultProps:notice correctly", () => {
    const wrapper = shallow(<Alert {...defaultProps} />);
    expect(wrapper.find(".alert--notice-info")).toHaveLength(1);
  });

  it("Should contain props:notice correctly with new value", () => {
    const wrapper = shallow(<Alert {...defaultProps} notice="warning" />);
    expect(wrapper.find(".alert--notice-warning")).toHaveLength(1);
  });

  it("Should contain defaultProps:handleClick a new tag html", () => {
    const wrapper = shallow(<Alert {...defaultProps} />);
    expect(wrapper.find(".alert--content-right")).toHaveLength(1);
  });

  it("Should not appear a new tag html without Props:handleClick", () => {
    const overrideDefaultProps = {
      children: "children Content",
      className: "override-class",
      progressBarLabel: true,
      progressBar: 64,
      notice: "info",
    };
    const wrapper = shallow(<Alert {...overrideDefaultProps} />);
    expect(wrapper.find(".alert--content-right")).toHaveLength(0);
  });
});
