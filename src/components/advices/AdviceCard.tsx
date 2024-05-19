import React, { FunctionComponent } from "react";
import { IAdvice } from "../../models";

interface IProps {
  advice: IAdvice;
}

export const AdviceCard: FunctionComponent<IProps> = ({advice}) => {
  const {situation, instructions} = advice;

  return (
    <div>
      <h3>{situation}</h3>
      <p>{instructions}</p>
    </div>
  );
};
