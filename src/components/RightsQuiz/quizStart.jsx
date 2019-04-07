import React, { Component } from "react";
import { Link } from "react-dom";
import { CSSTransitionGroup } from "react-transition-group";
import QuizSingle from "./singleQuiz";
import { getQuestions } from "./quizData";
import QuizResult from "./quizResult";
import QuestionCount from "./questionCount";
import { getPrograms } from "./resultPgramData";
import { isEligible } from "../util/validateRights";
import ProgressBar from "../common/progressBar";
import MainFooter from "../layout/mainFooter";

//The start of the quiz component
class QuizStart extends Component {
  state = {
    quizData: [], //get the total questions and answers
    currentQuestion: {}, //current question object
    currentIndex: 0, //index of current question
    answer: {},
    choices: [], // question choices
    questionContent: "", //question body
    result: [],
    programs: [] //get program data
  };

  //get all the question and results data, bug here , if there is no question existed
  componentDidMount() {
    const selectedId = this.props.match.params.selectItemId;
    console.log(selectedId);
    //get question data
    const quizData = getQuestions(selectedId);
    console.log(quizData);

    if (quizData.length !== 0) {
      const currentQuestion = quizData[0];
      const choices = currentQuestion.choices;
      const questionContent = currentQuestion.questionContent;

      //get program result data
      const programs = getPrograms();
      console.log(programs);

      this.setState({
        quizData,
        currentQuestion,
        choices,
        questionContent,
        programs
      });
    }
  }

  //nextStep() : go to next question, update currentIndex and currentQuestion
  handleAnswerSlected = (newResult, index) => {
    console.log("back result is", newResult);
    this.setState({ result: newResult, currentIndex: index });
    //this.setCheckResults(newResult);

    if (index < this.state.quizData.length) {
      this.setNextQuestion(index);
    } else {
      this.setCheckResults(newResult);
    }
  };

  //control to show the next question until finishing
  setNextQuestion(index) {
    const currentQuestion = this.state.quizData[index];
    const choices = currentQuestion.choices;
    const questionContent = currentQuestion.questionContent;
    this.setState({
      currentQuestion,
      choices,
      questionContent
    });
    console.log("set next question called...", currentQuestion);
    //}
  }

  //calculate the result that match the conditions
  setCheckResults(result) {
    //1. copy the programs data
    const programs = [...this.state.programs];
    //2. check eligible for each program
    programs.map(program => {
      const reqArr = [...program.require];
      program.isChecked = isEligible(result, reqArr);
      console.log("updated isChecked", program.isChecked);
    });
    //3. update the programs
    this.setState({ programs });
  }

  //return the final result of the questions
  getResults() {
    const result = [...this.state.result];
    console.log("get final result to check ", result);
    return result;
  }

  //render the quiz question and choices
  renderQuiz() {
    const { currentIndex } = this.state;
    return (
      <div className="row">
        <div className="col-12">
          <QuizSingle
            question={this.state.questionContent}
            choices={this.state.choices}
            index={this.state.currentIndex}
            total={this.state.quizData.length}
            onSelected={this.handleAnswerSlected}
            result={this.state.result}
            //onAnswer={this.handleAnswer}
          />
        </div>
      </div>
    );
  }

  //render the quiz resul
  renderResult() {
    console.log("passing to renderResult programs is", this.state.programs);
    console.log("passing to renderResult result  is", this.state.result);
    const { history } = this.props;
    return (
      <CSSTransitionGroup
        transitionName="fade"
        transitionEnterTimeout={800}
        transitionLeaveTimeout={500}
        transitionAppear
        transitionAppearTimeout={500}
      >
        <QuizResult
          result={this.state.result}
          programs={this.state.programs}
          history={history}
        />
      </CSSTransitionGroup>
    );
  }

  //built-in render function
  render() {
    //count the total number of questions
    const { length: total } = this.state.quizData;

    if (total === 0)
      return (
        <h1 className="">There are no questions available in the database.</h1>
      );

    console.log("questions length: ", total);
    return (
      <React.Fragment>
        <div id="quiz-start-top">
          <div className="container">
            <div className="row" id="quiz-start-inner">
              <div className="col-md-12">
                {/**question and answer block */}
                <div className="d-flex p-1 flex-column justify-content-center ">
                  <div id="question" className="m-5 text-center">
                    {/** Question / result block */}
                    {this.state.result.length ===
                    this.state.quizData.length ? null : (
                      <div className="text-center">
                        <h1 style={{ marginTop: 10 }}>
                          Question <span>{this.state.currentIndex + 1}</span>
                        </h1>

                        <div className="col-12 text-left">
                          <div>
                            <QuestionCount
                              counter={this.state.currentIndex + 1}
                              total={this.state.quizData.length}
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {this.state.result.length !== this.state.quizData.length
                      ? this.renderQuiz()
                      : this.renderResult()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="quiz-start-bottom" />
      </React.Fragment>
    );
  }
}

export default QuizStart;
