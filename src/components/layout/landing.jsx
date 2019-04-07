import React, { Component } from "react";
import { CSSTransitionGroup } from "react-transition-group";
import Banner from "../common/banner";
import Card from "../common/card";
import MainFooter from "./mainFooter";

class Landing extends Component {
  imgIds = [1, 2, 3];

  cards = [
    {
      id: 1,
      title: "Know Your Rights",
      desc: "Know all the support you can receive from the government ",
      linkPath: "/rightsQuiz",
      linkLabel: "Explore More",
      linkColor: "aqua-gradient",
      content: () => {
        this.handleScrollToTop();
      }
    },
    {
      id: 2,
      title: "Explore Dream Occupation",
      desc: "Know more about the occupation that you are interested in.",
      linkPath: "/occupation",
      linkLabel: "Explore More",
      linkColor: "purple-gradient",
      content: () => {
        this.handleScrollToTop();
      }
    },
    {
      id: 3,
      title: "Find Suitable Courses",
      desc: "Know about subsidized education options available for you",
      linkPath: "/courses",
      linkLabel: "Explore More",
      linkColor: "peach-gradient ",
      content: () => {
        this.handleScrollToTop();
      }
    },
    {
      id: 4,
      title: "Find Affordable Housing",
      desc: "Find safe and affordable region for future relocation",
      linkPath: "/housing",
      linkLabel: "Explore More",
      linkColor: "mean-fruit-gradient",
      content: () => {
        this.handleScrollToTop();
      }
    }
  ];

  links = [
    {
      id: 1,
      name: "Google ",
      url: "https://www.google.com/"
    },
    {
      id: 2,
      name: "Monash University ",
      url: "https://www.monash.edu/"
    }
  ];

  handleScrollToElement() {
    var element = document.getElementById("planner-section");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }
  }

  handleScrollToTop() {
    var element = document.body;
    if (element) {
      element.scrollIntoView({
        block: "start",
        inline: "nearest"
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="landing">
          <Banner imgIds={this.imgIds} />
          <div className="dark-overlay landing-inner text-light">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <CSSTransitionGroup
                    transitionName="fade"
                    transitionEnterTimeout={800}
                    transitionLeaveTimeout={500}
                    transitionAppear
                    transitionAppearTimeout={500}
                  >
                    <h1
                      id="homeTitle"
                      className="col-md-12 d-none d-lg-block display-1 text-white"
                    >
                      <strong>Plan Future With Confidence</strong>
                    </h1>

                    <p className="display-6">
                      Making the transition into adulthood easy for you and get
                      to know you better
                    </p>

                    <div
                      className="d-flex p-2 justify-content-center mt-5"
                      style={{ marginBottom: 10 }}
                    >
                      <button
                        className="btn btn-raised btn-lg btn-info d-flex flex-row justify-content-center "
                        onClick={() => {
                          this.handleScrollToElement();
                        }}
                      >
                        <span className="mr-3"> Start To Build Your Plan </span>
                        <i className="fas fa-arrow-down" />
                      </button>
                    </div>
                  </CSSTransitionGroup>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/**check list head */}
        <section id="create-head-section" className="">
          <div className="container text-center">
            <div className="row">
              <div className="col text-center">
                <div className="container p-3">
                  <div className="d-flex ">
                    <div className="col-sm-6 mr-5 d-none d-md-block">
                      <img
                        src={require(`../../img/planner2.jpg`)}
                        alt=""
                        className="img-fluid rounded-circle mr-5"
                      />
                    </div>

                    <div className="col-md-6">
                      <h1>Are You Ready To Get Started?</h1>
                      {/* Square check list*/}
                      <div id="ready-section ">
                        <div className="d-flex flex-row justify-content-stat">
                          <div className="p-4 align-self-center">
                            <i className="fas fa-check fa-2x" />
                          </div>
                          <div className="p-4 align-self-end lead">
                            50% of these youth DO complete high school
                          </div>
                        </div>

                        <div className="d-flex  flex-row justify-content-start">
                          <div className="p-4 align-self-center">
                            <i className="fas fa-check fa-2x " />
                          </div>
                          <div className="p-4 align-self-start lead">
                            50% ARE able to find steady employment.
                          </div>
                        </div>

                        <div className="d-flex  flex-row justify-content-center">
                          <div className="p-4 align-self-center">
                            <i className="fas fa-check fa-2x" />
                          </div>
                          <div className="p-4 align-self-start lead">
                            80% Find stable housing within 2 years of aging out
                          </div>
                        </div>
                        <div className="d-flex  flex-row justify-content-start">
                          <div className="p-4 align-self-center">
                            <i className="fas fa-check fa-2x" />
                          </div>
                          <div className="p-4 align-self-start lead">
                            30% ARE NOT pregnant by age 21.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/**middle banner */}
        <section id="middleBanner">
          <div className="blue-overlay">
            <div className="row">
              <div className="col">
                <div className="container pt-5">
                  <div className="d-flex justify-content-center">
                    {" "}
                    <h1>See What We Can Do</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* cards */}
        <section id="planner-section">
          <div className="container">
            <div className="col text-center mb-5 ">
              <h1 className="display-3">
                <strong>Start to Build Your Future Plan</strong>
              </h1>
            </div>

            <div className="row">
              {this.cards.map(card => (
                <Card
                  id={card.id}
                  title={card.title}
                  desc={card.desc}
                  linkPath={card.linkPath}
                  linkColor={card.linkColor}
                  linkLabel={card.linkLabel}
                  key={card.id}
                  onPress={card.content}
                />
              ))}
            </div>
          </div>
        </section>
        <div id="fixed-bottom-block"> </div>
        <MainFooter />
      </React.Fragment>
    );
  }
}

export default Landing;
