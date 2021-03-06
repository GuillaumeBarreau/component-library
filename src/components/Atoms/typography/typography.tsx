import React from "react";
import classNames from "classnames";
import { ComponentTypographyProps } from "./typography.d";
import "./typography.css";

export const Typography: React.FC<ComponentTypographyProps> = (props) => {
  const { className, font, children, size = "default", variant = "p" } = props;
  const prefixCls = "typography";

  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}-${font}`]: font,
      [`${prefixCls}-${size}`]: size,
    },
    className
  );

  const typographyNode = React.createElement(
    variant,
    {
      className: classes,
    },
    children
  );

  return typographyNode;
};
