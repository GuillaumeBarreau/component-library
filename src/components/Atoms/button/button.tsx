import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { ComponentButtonProps } from "./button.d";
import "./button.css";
import { Typography } from "components/Atoms/typography";
import { Icon } from "components/Atoms/icon";

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

  const iconNode: JSX.Element | null = iconName ? (
    <Icon icon={iconName} size={"lg"} />
  ) : !children && !iconName ? (
    <Icon icon={"bug"} size={"xs"} />
  ) : null;

  const prefixCls: string = "button";

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

  const ButtonDisabled = notice === "disabled" ? true : false;

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
