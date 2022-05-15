import React from "react";
import classNames from "classnames";
import { ComponentProgressBarProps } from "./progressBar.d";
import "./progressBar.css";

export const ProgressBar: React.FC<ComponentProgressBarProps> = (props) => {
  const {
    className,
    notice = "primary",
    progessMin,
    progessMax,
    progress,
    size = "default",
  } = props;

  const prefixCls: string = "progressBar";
  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}--size-${size}`]: size,
    },
    className
  );

  return (
    <div className={classes}>
      <div
        className={`progressBar--content progressBar--notice-${notice}`}
        style={{ width: `${progress}%` }}
        aria-valuenow={progress}
        aria-valuemin={progessMin}
        aria-valuemax={progessMax}
      />
    </div>
  );
};
