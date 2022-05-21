import React from "react";
import { shallow } from "enzyme";
import { Input } from "../input";
import { ComponentInputProps } from "../input.d";

describe("Input", () => {
  let defaultProps: JSX.IntrinsicAttributes & ComponentInputProps;

  beforeEach(() => {
    defaultProps = {
      className: "",
      labelDescription: "label description",
      namedInput: "namedInput",
      handleOnChange: jest.fn(),
      type: "text",
      placeholder: "Login",
      value: "value",
    };
  });

  it("renders correctly", () => {
    const wrapper = shallow(<Input {...defaultProps} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it("mount correctly", () => {
    const wrapper = shallow(<Input {...defaultProps} />);
    expect(() => wrapper).not.toThrow();
  });

  it("Should contain defaultProps:placeholder correctly", () => {
    const wrapper = shallow(<Input {...defaultProps} />);
    expect(() => wrapper).not.toThrow();
    expect(wrapper.html()).toContain("Login");
  });

  it("Should contain defaultProps:labelDescription correctly", () => {
    const wrapper = shallow(<Input {...defaultProps} />);
    expect(() => wrapper).not.toThrow();
    expect(wrapper.html()).toContain("label description");
  });

  it("Should contain defaultProps:namedInput correctly", () => {
    const wrapper = shallow(<Input {...defaultProps} />);
    expect(() => wrapper).not.toThrow();
    expect(wrapper.html()).toContain("label description");
  });
});
