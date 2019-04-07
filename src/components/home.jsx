import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CSSTransitionGroup, Transition } from "react-transition-group";

class Home extends Component {
  state = {};

  render() {
    return (
      <div className="content">
        {/* Banner*/}
        <div id="home-section">
          <div className="dark-overlay1 ">
            <div className="home-inner container">
              <div className="row">
                <div className="col-sm-8 text-white">
                  <div className="card bg-info card-form">
                    <div className="card-body">
                      <h1 className="display-4">
                        {"  "}
                        Build your &nbsp;
                        <strong>future plan</strong>&nbsp;and protect your
                        &nbsp;
                        <strong>rights</strong>
                      </h1>

                      {/* Square check list*/}
                      <div className="d-none d-lg-block ">
                        <div className="d-flex">
                          <div className="p-4 align-self-start">
                            <i className="fas fa-check fa-2x" />
                          </div>
                          <div className="p-4 align-self-end lead">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                          </div>
                        </div>

                        <div className="d-flex">
                          <div className="p-4 align-self-start">
                            <i className="fas fa-check fa-2x " />
                          </div>
                          <div className="p-4 align-self-end lead">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                          </div>
                        </div>

                        <div className="d-flex">
                          <div className="p-4 align-self-start">
                            <i className="fas fa-check fa-2x" />
                          </div>
                          <div className="p-4 align-self-end lead">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RoadMap Card groups */}
        <div className="container mt-5 ">
          <div className="row d-flex">
            <CSSTransitionGroup
              transitionName="fade"
              transitionEnterTimeout={800}
              transitionLeaveTimeout={500}
              transitionAppear
              transitionAppearTimeout={500}
              className="col-md"
            >
              {/* Card 1  */}
              <div className="mb-5 ">
                <div id="explore1" className="card">
                  <div className="card-body">
                    <div className="class-title">
                      <h1>Explore Occupations </h1>
                    </div>
                    <div className="card-text">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        At, quos.
                      </p>
                      <Link
                        to="/exploreOccup"
                        className="btn btn-raised aqua-gradient text-white"
                      >
                        Explore More{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </CSSTransitionGroup>

            {/* Card 2  */}
            <CSSTransitionGroup
              transitionName="fade"
              transitionEnterTimeout={600}
              transitionLeaveTimeout={500}
              transitionAppear
              transitionAppearTimeout={500}
              className="col-md"
            >
              <div className="mb-5">
                <div id="explore2" className="card">
                  <div className="card-body">
                    <div className="class-title">
                      <h1>Find Your Courses </h1>
                    </div>

                    <div className="card-text">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        At, quos.
                      </p>
                      <Link
                        to="/exploreCourses"
                        className="btn btn-raised purple-gradient text-white"
                      >
                        Explore More{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </CSSTransitionGroup>

            {/* Card 3  */}
            <CSSTransitionGroup
              transitionName="fade"
              transitionEnterTimeout={600}
              transitionLeaveTimeout={500}
              transitionAppear
              transitionAppearTimeout={500}
              className="col-md"
            >
              <div className="mb-5">
                <div id="explore3" className="card">
                  <div className="card-body">
                    <div className="class-title">
                      <h1>Find Affordable Housing</h1>
                    </div>

                    <div className="card-text">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        At, quos.
                      </p>
                      <Link
                        to="/exploreHousing"
                        className="btn btn-raised peach-gradient text-white"
                      >
                        Explore More{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </CSSTransitionGroup>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
