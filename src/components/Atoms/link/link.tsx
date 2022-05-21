import React from "react";
import classNames from "classnames";
import { ComponentLinkProps } from "./link.d";
import "./link.css";

//   children,
//   className ,
//   disabled={disabled}
//   ref={forwardedRef}
//   target={target}
//   decorated={decorated}
//   rel={target === '_blank' ? 'noopener noreferrer' : ''}
//   href={disabled ? undefined : href}
//   onClick={disabled ? undefined : onClick}

export const Link: React.FC<ComponentLinkProps> = (props) => {
  const {
    children,
    className,
    ref,
    target = "_self",
    disabled = false,
    decorated = false,
    href,
  } = props;

  const prefixCls: string = "Link";
  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}--notice-${disabled}`]: disabled,
      [`${prefixCls}--notice-${decorated}`]: decorated,
    },
    className
  );

  return (
    <a
      className={classes}
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : ""}
    >
      {children}
    </a>
  );
};
