import React, { Component } from "react";
import { Tableau } from "tableau-api";
import HugeSelect from "../common/hugeSelect";
import StepperUI from "../common/stepper";
import MainFooter from "../layout/mainFooter";

class OccupationContain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      containerDiv: <div id="viz1554883970913" />,
      selectRegion: "",
      viz: {}
    };
  }

  componentDidMount() {
    this.initViz();
  }

  initViz() {
    var containerDiv = document.getElementById("tableauPlaceholder");
    const vizUrl =
      "https://public.tableau.com/views/iteration17/Dashboard1?:embed=y&:display_count=yes&publish=yes";

    var options = {
      //width: "1050px",
      //height: "700px",
      hideTabs: true,
      hideToolbar: false
      /* onFirstInteraction: function() {
        console.log("it worked");
        workbook = this.viz.getWorkbook();
        activeSheet = workbook.getActiveSheet();
      } */
    };
    this.viz = new window.tableau.Viz(this.container, vizUrl, options);
  }

  handleSelectChange = value => {
    console.log(value);
    if (value) {
      this.setState({ selectRegion: value });
    }
    //this.addValuesToFilter(value);
  };

  render() {
    return (
      <section id="occupation-section">
        <div className="occupation-inner" />
        <div className="container">
          <div className="d-flex flex-column justify-content-center">
            <div className="text-center mb-2">
              {" "}
              <h1 className="titleFont display-4">
                Explore the Most Popular Occupations in Victoria
              </h1>
              <p className="text-center display-7">
                Find out the growth, the current median salary, and the current
                number of people employed in your dream occupation in Victoria
              </p>
              <div> </div>
            </div>

            <div className="col">
              <p className="display-6 text-center btnFont text-white d-block bg-info">
                <strong>Choose a Region</strong>
              </p>
            </div>

            <div
              ref={c => (this.container = c)}
              id="tableauView"
              className="mb-5"
            />
          </div>
        </div>

        <div id="fixed-bottom-block" />
        <MainFooter />
      </section>
    );
  }
}

export default OccupationContain;
