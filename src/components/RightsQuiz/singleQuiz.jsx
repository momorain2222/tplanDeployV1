import React, { Component } from "react";
import { CSSTransitionGroup } from "react-transition-group";
import ProgressBar from "../common/progressBar";

class QuizSingle extends Component {
  state = {
    index: 0
  };

  handleSelected(e) {
    const { index, total } = this.props;
    const { result, onSelected } = this.props;
    console.log("passing  index is", index);

    const newResult = [...result];
    newResult.push(e);
    console.log("i clicked, newResult is ", newResult);

    onSelected(newResult, index + 1);
    console.log("passing back new index =", index + 1);
  }

  render() {
    //decontrust
    const { question, choices, total } = this.props;

    return (
      <React.Fragment>
        <CSSTransitionGroup
          transitionName="fade"
          transitionEnterTimeout={800}
          transitionLeaveTimeout={500}
          transitionAppear
          transitionAppearTimeout={500}
        >
          <div className="mt-5">
            <h1>{question}</h1>
          </div>
        </CSSTransitionGroup>

        {/** choices button*/}
        <div className="col" id="quiz-choices" style={{ marginTop: 140 }}>
          <CSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={800}
            transitionLeaveTimeout={500}
            transitionAppear
            transitionAppearTimeout={500}
          >
            <div
              id="answerBlock"
              className="row d-flex flex-row justify-content-around"
            >
              {choices.map(choice => (
                <button
                  key={choice.id}
                  className="btn btn-black"
                  onClick={() => this.handleSelected(choice.answer)}
                  style={{ width: 300, height: 200 }}
                >
                  {choice.item}
                </button>
              ))}
            </div>
          </CSSTransitionGroup>
        </div>
      </React.Fragment>
    );
  }
}

export default QuizSingle;
