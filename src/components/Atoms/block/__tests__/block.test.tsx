import React from "react";
import { shallow } from "enzyme";
import { Block } from "../block";
import { ComponentBlockProps } from "../block.d";

describe("Block", () => {
  let defaultProps: JSX.IntrinsicAttributes & ComponentBlockProps;

  beforeEach(() => {
    defaultProps = {
      children: "Block",
    };
  });

  it("renders correctly", () => {
    const wrapper = shallow(<Block {...defaultProps} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it("mount correctly", () => {
    const wrapper = shallow(<Block {...defaultProps} />);
    expect(() => wrapper).not.toThrow();
  });

  it("Should contain defaultProps:children correctly", () => {
    const wrapper = shallow(<Block {...defaultProps} />);
    expect(() => wrapper).not.toThrow();
    expect(wrapper.html()).toContain("Block");
  });
});
