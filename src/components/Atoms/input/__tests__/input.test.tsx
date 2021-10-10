import React from "react";
import { shallow } from "enzyme";
import {Input} from "../input";
import { ComponentInputProps } from "../input.d";

describe("Input", () => {
  let defaultProps: JSX.IntrinsicAttributes & ComponentInputProps;

  beforeEach(() => {
    defaultProps = {
      className: "",
      handleOnChange: jest.fn(),
      type: "text",
      placeholder: "Login",
      value: "value"
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

  it("to contain defaultProps:placeholder correctly", () => {
    const wrapper = shallow(<Input {...defaultProps} />);
    expect(() => wrapper).not.toThrow();
    expect(wrapper.html()).toContain("Login");
  });

});
