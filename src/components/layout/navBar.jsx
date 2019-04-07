import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <div
              className="text-center
            "
            >
              <h1>
                <span className="text-info p-1">T</span>-Plan
              </h1>
            </div>
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#tplan-nav"
            aria-expanded="false"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="tplan-nav">
            <div className="navbar-nav ml-auto">
              <NavLink className="nav-link nav-item" to="/rightsQuiz">
                <div className="text-center">
                  <p className="navTitle">Rights Quiz </p>
                </div>
              </NavLink>

              <NavLink className="nav-link nav-item" to="/occupation">
                <div className="text-center">
                  <p className="navTitle">Occupations </p>
                </div>
              </NavLink>

              <NavLink className="nav-link nav-item" to="/courses">
                <div className="text-center">
                  <p className="navTitle">Course</p>
                </div>
              </NavLink>
              <NavLink className="nav-link nav-item" to="/housing">
                <div className="text-center">
                  <p className="navTitle">Housing</p>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
