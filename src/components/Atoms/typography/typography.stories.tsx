import React from "react";
import {Typography} from "./typography";
import { Meta } from "@storybook/react/types-6-0";
import { ComponentTypographyProps, TSizes } from "./typography.d";
import "../../_settings/colors/colors.css";

export default {
  component: Typography,
  title: "Typography",
  argTypes: {
    className: {
      description: "className content",
      control: "text",
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

const sizes:TSizes[] = ["xsmall", "small", "medium", "large", "xlarge"];

const ListTemplate: any = (args: Partial<ComponentTypographyProps>) => (
  <>
    {sizes.map((size:TSizes, index) => (
      <div key={size}>
        {index !== 0 ? <hr></hr> : null}
        <Typography size={"small"}>{size}</Typography>
        <Typography size={size} font={args.font}>{args.children}</Typography>
      </div>
    ))}
  </>
);

export const TypographyDefault = ListTemplate.bind({});
TypographyDefault.args = {
  children: "Typography",
};

export const TypographyBold = ListTemplate.bind({});
TypographyBold.args = {
  children: "Typography",
  font: "bold",
};

export const TypographyLight = ListTemplate.bind({});
TypographyLight.args = {
  children: "Typography",
  font: "light",
};

export const TypographyItalic = ListTemplate.bind({});
TypographyItalic.args = {
  children: "Typography",
  font: "italic",
};

export const TypographyBlack = ListTemplate.bind({});
TypographyBlack.args = {
  children: "Typography",
  font: "black",
};
