import React, { useState } from "react";
import classNames from "classnames";
import { ComponentAlertProps } from "./alert.d";
import { Atoms } from "components";
import "./alert.css";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export const Alert: React.FC<ComponentAlertProps> = (props) => {
  const { children, className, notice = "default", handleClick } = props;

  const prefixCls: string = "alert";

  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}--notice-${notice}`]: notice,
    },
    className
  );

  const iconAlert: {
    [key: string]: IconProp;
  } = {
    info: "bell",
    warning: "circle-exclamation",
    success: "circle-check",
    error: "bomb",
    default: "coffee",
  };

  return (
    <div className={classes}>
      <div className="alert--content-top">
        <Atoms.Icon icon={iconAlert[notice]} size="sm" />
        <Atoms.Typography className={"alert--overide-typography"} size="small">
          {children}
        </Atoms.Typography>
        {handleClick && (
          <div className="alert--content-right">
            <Atoms.Button
              handleClick={() => handleClick}
              iconName="circle-xmark"
            />
          </div>
        )}
      </div>
      <div className="alert--content-bottom">
        <Atoms.ProgressBar
          progessMax={100}
          progessMin={0}
          progress={50}
          size="xsmall"
          notice={notice}
        ></Atoms.ProgressBar>
      </div>
    </div>
  );
};
