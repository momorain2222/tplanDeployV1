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
                <span className="text-info p-1 display-3 bannerTitle">T</span>
                <span className=" p-1 display-3 bannerTitle">-Plan</span>
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

          <div className="collapse navbar-collapse " id="tplan-nav">
            <div className="navbar-nav ml-auto navFont">
              <Link className="nav-link nav-item" to="/">
                <div className="text-center">
                  <p className="navTitle ">Home</p>
                </div>
              </Link>

              <NavLink className="nav-link nav-item" to="/rightsQuiz">
                <div className="text-center">
                  <p className="navTitle ">Benefits</p>
                </div>
              </NavLink>

              <NavLink className="nav-link nav-item" to="/occupation">
                <div className="text-center">
                  <p className="navTitle">Occupations </p>
                </div>
              </NavLink>

              <NavLink className="nav-link nav-item" to="/courses">
                <div className="text-center">
                  <p className="navTitle">Education</p>
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
