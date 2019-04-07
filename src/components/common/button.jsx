import React, { Component } from "react";

const Button = ({ classes, handleClick }) => {
  return <button className={classes} onClick={() => handleClick()} />;
};

export default Button;
