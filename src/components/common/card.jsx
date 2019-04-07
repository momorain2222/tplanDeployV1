import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CSSTransitionGroup } from "react-transition-group";

const Card = ({ id, title, desc, linkPath, linkColor, linkLabel, onPress }) => {
  return (
    <div className="p-4 col-lg">
      <CSSTransitionGroup
        transitionName="fade"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={800}
        transitionAppear
        transitionAppearTimeout={800}
      >
        <div className="card">
          <span className=" conorIcon fa-stack fa-3x">
            <i className="fas fa-circle fa-stack-2x" />
            <strong className="fa-stack-1x calendar-text text-white">
              {id}
            </strong>
          </span>
          <div className="card-body">
            <div className="class-title">
              <h1 className="display-4">{title} </h1>
            </div>
            <div className="card-text">
              <p className="mt-3 display-6">{desc}</p>
              <Link
                to={`${linkPath}`}
                onClick={() => onPress()}
                className={`btn btn-raised ${linkColor} text-white`}
              >
                {linkLabel}
              </Link>
            </div>
          </div>
        </div>
      </CSSTransitionGroup>
    </div>
  );
};

export default Card;
