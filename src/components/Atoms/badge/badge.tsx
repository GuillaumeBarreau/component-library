import React from "react";
import classNames from "classnames";
import { ComponentBadgeProps } from "./badge.d";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "components/Atoms/typography";
import "./badge.css";

export const Badge: React.FC<ComponentBadgeProps> = (props) => {
  const {
    children,
    className,
    notice = "default",
    size = "default",
    iconName,
  } = props;

  const prefixCls: string = "badge";

  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}--notice-${notice}`]: notice,
    },
    className
  );

  const iconNameSize =
    size === "xsmall" ? "2xs" : size === "small" ? "xs" : "sm";

  const iconNode: JSX.Element | null =
    iconName && iconNameSize ? (
      <FontAwesomeIcon icon={iconName} size={iconNameSize} />
    ) : null;

  return (
    <div className={classes}>
      {iconNode}
      <Typography
        font="bold"
        size={size}
        variant={"p"}
        className={"badge--overide-typography"}
      >
        {children}
      </Typography>
    </div>
  );
};
