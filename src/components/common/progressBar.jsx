import React from "react";
import { Progress } from "semantic-ui-react";
import QuestionCount from "../RightsQuiz/questionCount";

const ProgressBar = ({ current, total }) => (
  <Progress
    value={current}
    warning
    total={total}
    progress="ratio"
    label="1"
    active={true}
  />
);

export default ProgressBar;
