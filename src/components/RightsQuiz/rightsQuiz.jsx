import React, { Component } from "react";
import { getCategories } from "./quizCategory";
import DropdownSelect from "../common/dropDown";
import Footer from "../layout/footer";
import MainFooter from "../layout/mainFooter";

class RightsQuiz extends React.Component {
  state = {
    currentStep: 1,
    correct: 0, // Set the total right answered to zero
    selectItemId: 0,
    categories: [],
    error: false
  };

  //update categoreis data in state
  componentDidMount() {
    const categories = [...getCategories()];
    this.setState({ categories });
  }

  //handle select change
  handleChange = e => {
    this.setState({ selectItemId: e, error: false });

    console.log(e, this.state.selectItemId);
  };

  handleScrollToTop() {
    window.scrollTo(0, 0);
  }

  //go to the matched quiz questions
  handleStart = () => {
    this.handleScrollToTop();
    if (this.state.selectItemId === 0) {
      this.setState({ error: true });
      return;
    }

    console.log(
      `start click , current category id == ${this.state.selectItemId} `
    );

    const selectItemId = this.state.selectItemId;
    this.props.history.push(`/rightsQuiz/${selectItemId}`);
  };

  // Proceed to next step
  nestStep = () => {
    const { currentStep } = this.state;
    this.setState({ currentStep: currentStep + 1 });
  };

  prvStep = () => {
    const { currentStep } = this.state;
    this.setState({ currentStep: currentStep - 1 });
    //go to start Quiz page
    this.props.history.push("/movies/new");
  };

  render() {
    console.log("right quiz has been calling");
    const { currentStep, correct, selectItemId, categories } = this.state;

    return (
      <React.Fragment>
        <div className="quiz-main-content">
          <div id="quiz-section">
            <div className="quiz-inner">
              <div id="quiz-banner" className="py-5 bg-info text-white">
                <div className="container">
                  <div className="d-none d-sm-block ">
                    <h1 className="title h1 my-4">Know Your Rights</h1>
                    <h4>Start answer the short and quick questions</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container" id="quiz-start-content">
            <div className="d-flex justify-content-center align-items-center flex-column">
              <h1 className="title m-5 col-10 text-center">
                Are you confident in the future?
              </h1>
              <div className="col-6 text-center">
                <article className="article">
                  <p className="display-7">
                    Take our quiz, learn important rights you have is expected
                    to protect your future aimport
                  </p>
                </article>
              </div>

              {/*age range drop down button */}
              <div className="row mt-5">
                <div className="col mb-3 mr-5">
                  <div className="d-flex flex-column justify-content center">
                    <div className="text-center mb-4">
                      {" "}
                      <h3 className="text-info">Choose your age group </h3>
                    </div>
                    <div className="required field">
                      <DropdownSelect
                        options={categories}
                        onChnage={this.handleChange}
                        error={this.state.error}
                        placeholder={"Please chooose your age group"}
                      />
                    </div>
                  </div>

                  {/*start button */}
                  <button
                    id="quizStartBtn"
                    type="button"
                    className="btn btn-info col-6-sm mt-5 mb-5"
                    style={{ width: 250, height: 70 }}
                    onClick={this.handleStart}
                  >
                    <div className="d-flex p-2 justify-content-between">
                      <span> Start </span>
                      <i className="fas fa-arrow-right" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="fixed-bottom-block" />
        <MainFooter />
      </React.Fragment>
    );
  }
}

export default RightsQuiz;
