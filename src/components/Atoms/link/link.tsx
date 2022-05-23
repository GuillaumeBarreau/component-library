import React from "react";
import classNames from "classnames";
import { ComponentLinkProps } from "./link.d";
import "./link.css";

export const Link: React.FC<ComponentLinkProps> = (props) => {
  const {
    children,
    className,
    notice = "default",
    target = "_self",
    decorated = false,
    href,
    forwardedRef,
  } = props;

  const prefixCls = "link";
  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}--notice-${notice}`]: notice,
      [`${prefixCls}--notice-${decorated}`]: decorated,
    },
    className
  );

  return (
    <a
      ref={forwardedRef}
      className={classes}
      href={notice !== "disabled" ? href : undefined}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : ""}
    >
      {children}
    </a>
  );
};
