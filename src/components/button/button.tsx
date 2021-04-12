import React from 'react';
import classNames from 'classnames';
import { ComponentButtonProps } from './button.d';
import "./button.css";
import Typography from "../typography";

const Button: React.FC<ComponentButtonProps> = (props) => {

  const { className, handleClick, children, iconName, type, notice = "default"} = props;
  const iconNode: string | null = iconName || null;
  const prefixCls: string  = 'button';
  
  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-${notice}`]: notice,
    },
    className,
  );

  const buttonNode = (
    <button
      className={classes}
      onClick={handleClick}
    >
      {iconNode}
      <Typography 
        font="bold" 
        size="small"
        variant={"p"}
      >
        {children}
      </Typography>
    </button>
  );


  return buttonNode;
};

export default Button;