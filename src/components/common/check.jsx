import React, { Component } from "react";
import cx from "classnames";

const Check = ({ isChecked }) => {
  console.log("render check icon", isChecked);

  return (
    <i
      id="checkBox"
      className={cx({
        "text-center": true,
        "p-3": true,
        "fa-2x": true,
        "fa fa-check-circle": isChecked,
        "far fa-circle": !isChecked
      })}
    />
  );
};

export default Check;
