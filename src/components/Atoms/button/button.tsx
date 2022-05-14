import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    size,
    isBlock,
    variant = "default",
    notice = "default",
  } = props;

  const iconNode: JSX.Element | null = iconName ? (
    <FontAwesomeIcon icon={iconName} size={"lg"} />
  ) : null;

  const prefixCls: string = "button";

  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}--notice-${notice}`]: notice,
      [`${prefixCls}--size-${size}`]: size,
      [`${prefixCls}--block`]: isBlock,
      [`${prefixCls}--${notice}--variant-${variant}`]: variant,
    },
    className
  );

  const ButtonDisabled = notice === "disabled" ? true : false;

  const buttonNode = (
    <button
      className={classes}
      onClick={handleClick}
      disabled={ButtonDisabled}
      arial-label="trigger button"
    >
      {iconNode}
      <Typography font="bold" size={size} variant={"p"}>
        {children}
      </Typography>
    </button>
  );

  return buttonNode;
};
