import React from "react";
import classNames from "classnames";
import { ComponentQuestionProps } from "./question.d";
import "./question.css";
import { Atoms } from "components";

export const Question: React.FC<ComponentQuestionProps> = (props) => {
  const {
    className,
    children,
  } = props;
  const prefixCls: string = "question";

  const classes = classNames(
    prefixCls,
    className
  );

  const QuestionNode = (
    <div className={classes}>
      <div className="question-border--container" />
      <div className="question-border--container2" />
      <Atoms.Typography font="bold" size="small" variant={"p"}>
        {children}
      </Atoms.Typography>
    </div>
  );

  return QuestionNode;
};
