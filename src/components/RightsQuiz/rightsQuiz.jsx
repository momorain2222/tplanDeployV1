import React, { Component } from "react";
import { getCategories } from "./quizCategory";
import DropdownSelect from "../common/dropDown";
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
    this.props.history.push("/");
  };

  render() {
    console.log("right quiz has been calling");
    const { currentStep, correct, selectItemId, categories } = this.state;

    return (
      <React.Fragment>
        <div id="quizStartContainer" className="quiz-main-content">
          <div id="quiz-section">
            <div className="quiz-inner blueOverlay text-left">
              <div className="py-5 text-white">
                <div className="container">
                  <div className="d-none d-sm-block text-left">
                    <h1 className="bannerTitle display-2 my-4 ">
                      <strong>Know Your Benefits and allowance</strong>
                    </h1>
                  </div>

                  <p className="display-6_1 bannerQuoteFont">
                    "No matter our job, no matter our height, we all deserve to
                    be treated right"
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="container mt-5" id="quiz-start-content">
            <div className="row">
              <div className="col-md-6">
                <div className="d-flex flex-column ">
                  <h1 className="titleFont">
                    Are you confident about your future?
                  </h1>

                  <p className="display-6">
                    Tell us about yourself and know the support you can receive
                  </p>

                  {/* age range drop down buttons */}
                  <div className="row mt-3">
                    <div className="col mb-5 mr-5">
                      <div className="d-flex flex-column justify-content-start">
                        <h2 className="text-info text-center">
                          Choose your age group
                        </h2>
                        <div className="required field mt-4 mb-5">
                          <DropdownSelect
                            options={categories}
                            onChnage={this.handleChange}
                            error={this.state.error}
                            placeholder={"Please select one age group"}
                            id="quizDropDown"
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row justify-content-center">
                        {/*start button */}
                        <button
                          id="quizStartBtn"
                          type="button"
                          className="btn btn-info mt-3 mb-5"
                          style={{ width: 250, height: 70 }}
                          onClick={this.handleStart}
                        >
                          <div className="d-flex p-2 justify-content-between">
                            <span className="btnFont"> Start </span>
                            <i className="fas fa-arrow-right" />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 d-none d-lg-block">
                <img
                  src={require(`../../img/rights_banner.jpg`)}
                  alt=""
                  className="img-fluid ml-5"
                />
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
