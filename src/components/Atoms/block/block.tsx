import React from "react";
import classNames from "classnames";
import { ComponentBlockProps } from "./block.d";
import "./block.css";

export const Block: React.FC<ComponentBlockProps> = (props) => {
  const { children, className, variant = "div" } = props;
  const prefixCls: string = "block";

  const classes = classNames(prefixCls, {}, className);

  const blockNode = React.createElement(
    variant,
    {
      className: classes,
    },
    children
  );

  return blockNode;
};
