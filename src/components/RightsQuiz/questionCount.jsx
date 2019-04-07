import React from "react";
import PropTypes from "prop-types";
import ProgressBar from "../common/progressBar";

function QuestionCount(props) {
  console.log("counter = ", props.counter);
  if (props.counter <= props.total)
    return (
      <div>
        <div className="display-7 mb-3">
          <span>{props.counter}</span> out of <span>{props.total}</span>
        </div>
        <ProgressBar current={props.counter} total={props.total} />
      </div>
    );
}

QuestionCount.propTypes = {
  counter: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

export default QuestionCount;
