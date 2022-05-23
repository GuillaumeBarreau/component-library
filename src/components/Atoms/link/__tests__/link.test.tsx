import React, { Ref } from "react";
import { mount, render, shallow } from "enzyme";
import { Link } from "../link";
import { ComponentLinkProps } from "../link.d";

describe("Link", () => {
  let defaultProps: JSX.IntrinsicAttributes & ComponentLinkProps;

  beforeEach(() => {
    defaultProps = {
      children: "Link",
      notice: "info",
      href: "https://bonjoursLesPixels.com",
    };
  });

  it("renders correctly", () => {
    const wrapper = shallow(<Link {...defaultProps} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it("mount correctly", () => {
    const wrapper = shallow(<Link {...defaultProps} />);
    expect(() => wrapper).not.toThrow();
  });

  it("Should contain defaultProps:children correctly", () => {
    const wrapper = shallow(<Link {...defaultProps} />);
    expect(() => wrapper).not.toThrow();
    expect(wrapper.html()).toContain("Link");
  });

  it("Should contain defaultProps:href correctly", () => {
    const wrapper = shallow(<Link {...defaultProps} />);
    expect(wrapper.html()).toContain('href="https://bonjoursLesPixels.com"');
  });

  it("Should contain defaultProps:notice correctly", () => {
    const wrapper = mount(<Link {...defaultProps} />);
    expect(() => wrapper).not.toThrow();
    expect(wrapper.html()).toContain("link--notice-info");
  });

  it("Should contain Props:Notice with following value disabled", () => {
    const wrapper = shallow(<Link {...defaultProps} notice="disabled" />);
    expect(wrapper.html()).toContain("disabled");
  });
});
