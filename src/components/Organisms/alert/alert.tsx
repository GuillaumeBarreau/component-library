import React, { useState } from "react";
import classNames from "classnames";
import { ComponentAlertProps, IProgressBarProps } from "./alert.d";
import { Icon } from "components/Atoms/icon";
import { Typography } from "components/Atoms/typography";
import { Button } from "components/Atoms/button";
import { ProgressBar } from "components/Atoms/progressBar";
import "./alert.css";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export const Alert: React.FC<ComponentAlertProps & IProgressBarProps> = (
  props
) => {
  const [fadeOut, setFadeOut] = useState(false);
  const {
    children,
    className,
    notice = "default",
    dismissible,
    progressBar,
    progressBarLabel,
  } = props;

  const prefixCls = "alert";

  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}--notice-${notice}`]: notice,
      [`${prefixCls}--status-fadeOut`]: fadeOut || progressBar === 100,
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
        <Icon icon={`${iconAlert[notice]}`} size="sm" />
        <Typography className={"alert--overide-typography"} size="small">
          {children}
        </Typography>
        {dismissible && (
          <div className="alert--content-right">
            <Button
              handleClick={() => {
                setFadeOut(true);
              }}
              iconName="circle-xmark"
            />
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
