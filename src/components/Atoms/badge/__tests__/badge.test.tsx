import React from "react";
import { shallow } from "enzyme";
import { Badge } from "../badge";
import { ComponentBadgeProps } from "../badge.d";

describe("Badge", () => {
  let defaultProps: JSX.IntrinsicAttributes & ComponentBadgeProps;

  beforeEach(() => {
    defaultProps = {
      children: "Badge",
      className: "overide-class",
    };
  });

  it("Should match with Snapshot correctly", () => {
    const wrapper = shallow(<Badge {...defaultProps} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it("mount correctly", () => {
    const wrapper = shallow(<Badge {...defaultProps} />);
    expect(() => wrapper).not.toThrow();
  });

  it("should render with notice props", () => {
    const props: JSX.IntrinsicAttributes & ComponentBadgeProps = {
      ...defaultProps,
      notice: "success",
    };
    const wrapper = shallow(<Badge {...props} />);
    expect(wrapper.find(".badge--notice-success")).toHaveLength(1);
  });

  it("should render with className props", () => {
    const props: JSX.IntrinsicAttributes & ComponentBadgeProps = {
      ...defaultProps,
      className: "overide-class",
    };
    const wrapper = shallow(<Badge {...props} />);
    expect(wrapper.find(".overide-class")).toHaveLength(1);
  });

  it("should render with size props", () => {
    const props: JSX.IntrinsicAttributes & ComponentBadgeProps = {
      ...defaultProps,
      size: "small",
    };
    const wrapper = shallow(<Badge {...props} />);
    expect(wrapper.find(".typography-small")).toHaveLength(1);
  });

  it("should render with children props", () => {
    const props: JSX.IntrinsicAttributes & ComponentBadgeProps = {
      ...defaultProps,
      children: "Badge",
    };
    const wrapper = shallow(<Badge {...props} />);
    expect(wrapper.html()).toContain("Badge");
  });
});
