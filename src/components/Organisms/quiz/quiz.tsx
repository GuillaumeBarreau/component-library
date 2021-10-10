import React from "react";
import classNames from "classnames";
import { ComponentButtonProps } from "./quiz.d";
import "./answer.css";
import { Molecules } from "../../";

export const Quiz: React.FC<ComponentButtonProps> = (props) => {
  const {
    className,
    iconName,
    type,
    notice = "default",
  } = props;
  const prefixCls: string = "button";

  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-${notice}`]: notice,
    },
    className
  );

  const QuizNode = (
    <div>
      <Molecules.Question>Questionsss</Molecules.Question>
    </div>
  );

  return QuizNode
  ;
};
