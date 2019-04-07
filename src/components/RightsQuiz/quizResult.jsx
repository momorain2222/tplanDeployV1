import React, { Component } from "react";
import { CSSTransitionGroup } from "react-transition-group";
import RightsCheckList from "./rightsCheckList";

import MainFooter from "../layout/mainFooter";

const QuizResult = ({ result, programs, history }) => {
  return (
    <div>
      <div id="quizResult">
        <div className="container">
          <h1 className="display-3">
            {" "}
            Completed ! You can consider these RIGHTS{" "}
          </h1>
          <div className="d-flex flex-column justify-content-around">
            <div className="card">
              <div className="p-4 gradient-card-header cloudy-knoxville-gradient text-dark text-left">
                <p className="mb-0 pb-2 pt-2 display-7 text-center">
                  You can get more information about each right by clicking the
                  'read more' buttons
                </p>

                <div className="card-body card-body-cascade text-center mt-1">
                  {/**<h5>You got a {[...result]} </h5> */}
                  <CSSTransitionGroup
                    transitionName="fade"
                    transitionEnterTimeout={800}
                    transitionLeaveTimeout={500}
                    transitionAppear
                    transitionAppearTimeout={500}
                  >
                    <RightsCheckList programs={programs} />
                  </CSSTransitionGroup>

                  <button
                    type="button"
                    className="btn btn-info col-6-md mt-5"
                    onClick={() => history.replace("/rightsQuiz")}
                  >
                    <div className="d-flex flex-row p-2 justify-content-between">
                      <span> Go Back </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizResult;
