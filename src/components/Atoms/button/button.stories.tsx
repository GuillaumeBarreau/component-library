import React from "react";
import {Button} from "./button";
import { Meta } from "@storybook/react/types-6-0";
import { ComponentButtonProps } from "./button.d";
import "../../_settings/colors/colors.css";

export default {
  component: Button,
  title: "Button",
  argTypes: {
    notice: {
      control: "select",
      options: ["default", "info", "warning", "success", "error", "disabled"],
    },
    className: {
      description: "className content",
      control: "text",
    },
    variant: {
      control: "select",
      options: ["default", "outlaned", "contained"],
    },
    iconName: {
      control: "select",
      options: [""],
    },
    children: {
      description: "Text content",
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
  args: JSX.IntrinsicAttributes & ComponentButtonProps
) => <>
  <section style={{display: "flex", justifyContent: "center"}}>
    <Button {...args} />
  </section>
</>;

export const ButtonDefault = Template.bind({});
ButtonDefault.args = {
  children: "button",
  handleClick: () => null,
};

export const ButtonSuccess = Template.bind({});
ButtonSuccess.args = {
  notice: "success",
  children: "button-success",
  handleClick: () => null,
};

export const ButtonWarning = Template.bind({});
ButtonWarning.args = {
  notice: "warning",
  children: "button-warning",
  handleClick: () => null,
};

export const ButtonError = Template.bind({});
ButtonError.args = {
  notice: "error",
  children: "button-error",
  handleClick: () => null,
};

export const ButtonInfo = Template.bind({});
ButtonInfo.args = {
  notice: "info",
  children: "button-info",
  handleClick: () => null,
};

export const ButtonDisabled = Template.bind({});
ButtonDisabled.args = {
  notice: "disabled",
  children: "button-disabled",
  handleClick: () => null,
};
