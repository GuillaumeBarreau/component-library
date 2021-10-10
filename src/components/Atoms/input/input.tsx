import React from "react";
import classNames from "classnames";
import { ComponentInputProps } from "./input.d";
import "./input.css";

export const Input: React.FC<ComponentInputProps> = (props) => {
  const {
    className,
    handleOnChange,
    placeholder,
    type = "text",
    value
  } = props;
  const prefixCls: string = "input";

  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}-${type}`]: type,
    },
    className
  );

  const inputNode = (
    <input 
        className={classes} 
        onChange={handleOnChange}
        type={type}
        placeholder={placeholder}
        value={value}
      />
  );

  return inputNode;
};
