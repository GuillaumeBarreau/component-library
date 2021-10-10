import React from "react";
import classNames from "classnames";
import { ComponentButtonProps } from "./button.d";
import "./button.css";
import { Typography } from "components/Atoms/typography";

export const Button: React.FC<ComponentButtonProps> = (props) => {
  const {
    className,
    handleClick,
    children,
    iconName,
    type,
    variant = "default",
    notice = "default",
  } = props;
  const iconNode: string | null = iconName || null;
  const prefixCls: string = "button";

  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-${notice}`]: notice,
      [`${prefixCls}-${notice}--variant-${variant}`]: variant,
    },
    className
  );

  const ButtonDisabled = notice === "disabled" ? true : false;

  const buttonNode = (
    <button className={classes} onClick={handleClick} disabled={ButtonDisabled}>
      {iconNode}
      <Typography font="bold" size="small" variant={"p"}>
        {children}
      </Typography>
    </button>
  );

  return buttonNode;
};
