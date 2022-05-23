import React, { useState } from "react";
import classNames from "classnames";
import { ComponentAlertProps, IProgressBarProps } from "./alert.d";
import { Icon } from "components/Atoms/icon";
import { Typography } from "components/Atoms/typography";
import { Button } from "components/Atoms/button";
import { ProgressBar } from "components/Atoms/progressBar";
import "./alert.css";
import { TiconName } from "components/_settings/globalTypes/Types.d";

export const Alert: React.FC<ComponentAlertProps & IProgressBarProps> = (
  props
) => {
  const {
    children,
    className,
    notice = "default",
    progressBar,
    progressBarLabel,
    handleClick,
  } = props;

  const prefixCls = "alert";

  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}--notice-${notice}`]: notice,
    },
    className
  );

  const iconAlert: {
    [key: string]: TiconName;
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
        <Icon icon={iconAlert[notice]} size="sm" />
        <Typography className={"alert--overide-typography"} size="small">
          {children}
        </Typography>
        {handleClick && (
          <div className="alert--content-right">
            <Button handleClick={handleClick} iconName="circle-xmark" />
          </div>
        )}
      </div>
      {(progressBar || progressBar === 0) && (
        <div className="alert--content-bottom">
          <ProgressBar progress={progressBar} size="xsmall" notice={notice} />
          {progressBarLabel && (
            <Typography className="alert--overide-typography">
              {progressBar}%
            </Typography>
          )}
        </div>
      )}
    </div>
  );
};
