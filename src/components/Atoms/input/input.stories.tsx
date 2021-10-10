import React from "react";
import {Input} from "./input";
import { Meta } from "@storybook/react/types-6-0";
import { ComponentInputProps } from "./input.d";
import "../../_settings/colors/colors.css";

export default {
  component: Input,
  title: "Input",
  argTypes: {
    className: {
      description: "className content",
      control: "text",
    },
  },
  parameters: {
    a11y: {
      // optional selector which element to inspect
      element: "#root",
      // optional flag to prevent the automatic check
      manual: false,
    },
  },
} as Meta;

const Template: any = (
  args: JSX.IntrinsicAttributes & ComponentInputProps
) => <>
  <section style={{display: "flex", justifyContent: "center"}}>
    <Input {...args} />
  </section>
</>;

export const InputDefault = Template.bind({});
InputDefault.args = {
  placeholder: "input",
  handleOnChange: () => null,
};
