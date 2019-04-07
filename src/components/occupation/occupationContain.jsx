import React, { Component } from "react";
import { Tableau } from "tableau-api";
import HugeSelect from "../common/hugeSelect";
import StepperUI from "../common/stepper";
import MainFooter from "../layout/mainFooter";

class OccupationContain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      containerDiv: <div id="viz1554445704733" />,
      selectRegion: "",

      viz: {}
    };
  }

  componentDidMount() {
    this.initViz();
  }

  /*   regionOptions = [
    { key: 1, text: "Ballarat", value: "ballarat" },
    { key: 2, text: "Barwon", value: "barwon" }
  ];
 */
  /*  getVizObject() {
    var divElement = document.getElementById("viz1554445704733");
    var vizElement = divElement.getElementsByTagName("object")[0];
    vizElement.style.width = "100%";
    vizElement.style.height = divElement.offsetWidth * 0.75 + "px";
    var scriptElement = document.createElement("script");
    scriptElement.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  } */
  /* 
  addValuesToFilter = selectRegion => {
    activeSheet.applyFilterAsync(
      "Employment Region",
      selectRegion,
      this.container.tableau.FilterUpdateType.REPLACE
    );
  };
 */
  initViz() {
    var containerDiv = document.getElementById("tableauPlaceholder");
    //console.log(containerDiv);
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
              <h1>Explore the most popular Occupations in Victoria</h1>
              <p className="text-left">
                From here, you can explore the most popular jobs in the
                Victoria, Australia. Start your journey from selecting the
                region, and then interact with the graph to explore your desired
                occupation's current situation and the growth of specific
                occupation.
                {/* <ol>
                  <li>
                    <strong>
                      Step 1 : The size of the bubble indicates the popularity
                      of major occupation by region :
                    </strong>{" "}
                    Click on an occupation to see the further details about it
                  </li>
                  <li>
                    {" "}
                    <strong>
                      Step 2 : The size of the bubble indicates the popularity
                      of major occupation by region :
                    </strong>{" "}
                    Click on an occupation to see the further details about it
                  </li>
                </ol> */}
              </p>
              <div> </div>
              {/* <div className="d-flex flex-column justify-content-center ">
                <label color="cyan">Choose a Region</label>

                <HugeSelect
                  options={this.regionOptions}
                  placeholder="choose a region"
                  onChange={this.handleSelectChange}
                />
              </div> */}
            </div>

            <StepperUI className="mt-1" />
            <div ref={c => (this.container = c)} className="mb-4" />
          </div>
        </div>

        <div id="fixed-bottom-block" />
        <MainFooter />
      </section>
    );
  }
}

export default OccupationContain;
