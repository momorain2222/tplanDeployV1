import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import NavBar from "./components/layout/navBar";
import Landing from "./components/layout/landing";
import RightsQuiz from "./components/RightsQuiz/rightsQuiz";
import QuizStart from "./components/RightsQuiz/quizStart";
import OccupationContain from "./components/occupation/occupationContain";
import CoursesContainer from "./components/courses/coursesContainer";
import HousingContain from "./components/housing/housingContain";
import NotFound from "./components/util/notFound";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/housing" component={HousingContain} />
          <Route path="/courses" component={CoursesContainer} />
          <Route path="/occupation" component={OccupationContain} />
          <Route path="/rightsQuiz/:selectItemId" component={QuizStart} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/rightsQuiz" component={RightsQuiz} />
          <Route exact path="/" component={Landing} />
          <Redirect from="/rightsQuiz/:selectItemId" to="/rightsQuiz" />
          <Redirect to="/not-found" />
          <Redirect from="/" exact to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
