import React from "react";
import classNames from "classnames";
import { ComponentButtonProps } from "./answer.d";
import "./answer.css";
import { Atoms } from "components";

export const Answer: React.FC<ComponentButtonProps> = (props) => {
  const {
    className,
    handleClick,
    children,
    iconName,
    type,
    notice = "default",
  } = props;
  const iconNode: string | null = iconName || null;
  const prefixCls: string = "button";

  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-${notice}`]: notice,
    },
    className
  );

  const AnswerNode = (
    <button className={classes} onClick={handleClick}>
      {iconNode}
      <Atoms.Typography font="bold" size="small" variant={"p"}>
        {children}
      </Atoms.Typography>
    </button>
  );

  return AnswerNode;
};
