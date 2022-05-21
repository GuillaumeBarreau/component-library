import React from "react";
import classNames from "classnames";
import { ComponentButtonProps } from "./button.d";
import "./button.css";
import { Typography } from "components/Atoms/typography";
import { Icon } from "components/Atoms/icon";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";

export const Button: React.FC<ComponentButtonProps> = (props) => {
  const {
    className,
    handleClick,
    children,
    iconName,
    size = "default",
    isBlock,
    variant,
    notice = "default",
  } = props;

  const iconNameSize: { [key: string]: SizeProp | "2x" } = {
    xsmall: "lg",
    small: "lg",
    medium: "2x",
    default: "2x",
  };

  const iconNode: JSX.Element | null = iconName ? (
    <Icon icon={iconName} size={`${iconNameSize[size]}`} />
  ) : !children && !iconName ? (
    <Icon icon={"bug"} size={"xs"} />
  ) : null;

  const prefixCls = "button";

  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}--notice-${notice}`]: notice,
      [`${prefixCls}--size-${size}`]: size,
      [`${prefixCls}--block`]: isBlock,
      [`${prefixCls}--variant-${variant}`]: variant,
    },
    className
  );

  const ButtonDisabled: boolean = notice === "disabled" ? true : false;

  const buttonNode = (
    <>
      {(!children && (
        <button
          className={"button--variant-icon"}
          onClick={handleClick}
          arial-label="trigger button"
        >
          <Icon icon={iconName || "bug"} size={"lg"} />
        </button>
      )) || (
        <button
          className={classes}
          onClick={handleClick}
          disabled={ButtonDisabled}
          arial-label="trigger button"
        >
          {iconNode}
          <Typography
            className="button--override-typography"
            font="bold"
            size={size}
            variant={"p"}
          >
            {children}
          </Typography>
        </button>
      )}
    </>
  );

  return buttonNode;
};
