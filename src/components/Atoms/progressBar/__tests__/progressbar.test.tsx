import React from "react";
import { shallow } from "enzyme";
import { ProgressBar } from "../progressBar";
import { ComponentProgressBarProps } from "../progressBar.d";

describe("ProgressBar", () => {
  let defaultProps: JSX.IntrinsicAttributes & ComponentProgressBarProps;

  beforeEach(() => {
    defaultProps = {
      notice: "primary",
      progress: 50,
      size: "small",
      className: "override-class",
    };
  });

  it("renders correctly", () => {
    const wrapper = shallow(<ProgressBar {...defaultProps} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it("mount correctly", () => {
    const wrapper = shallow(<ProgressBar {...defaultProps} />);
    expect(() => wrapper).not.toThrow();
  });

  it("Should contain defaultProps:children correctly", () => {
    const wrapper = shallow(<ProgressBar {...defaultProps} />);
    expect(() => wrapper).not.toThrow();
    expect(wrapper.html()).toContain("progressBar");
  });

  it("Should contain defaultProps:size correctly", () => {
    const wrapper = shallow(<ProgressBar {...defaultProps} />);
    expect(wrapper.html()).toContain("small");
  });

  it("Should contain defaultProps:className correctly", () => {
    const wrapper = shallow(<ProgressBar {...defaultProps} />);
    expect(wrapper.html()).toContain("override-class");
  });

  it("Should contain defaultProps:progessMax correctly", () => {
    const wrapper = shallow(<ProgressBar {...defaultProps} />);
    expect(wrapper.find(".progressBar--content").prop("aria-valuemax")).toEqual(
      100
    );
  });

  it("Should contain defaultProps:progress correctly", () => {
    const wrapper = shallow(<ProgressBar {...defaultProps} />);
    expect(wrapper.find(".progressBar--content").prop("aria-valuenow")).toEqual(
      50
    );
  });

  it("Should contain defaultProps:progessMin correctly", () => {
    const wrapper = shallow(<ProgressBar {...defaultProps} />);
    expect(wrapper.find(".progressBar--content").prop("aria-valuemin")).toEqual(
      0
    );
  });

  it("Should contain the witdh style value at 50% correctly", () => {
    const wrapper = shallow(<ProgressBar {...defaultProps} />);
    expect(wrapper.html()).toContain("width:50%");
  });
});
