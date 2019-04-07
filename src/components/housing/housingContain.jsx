import React, { Component } from "react";
import MainFooter from "../layout/mainFooter";

class HousingContain extends Component {
  state = {};

  render() {
    return (
      <div>
        <div id="home-section">
          <div className="dark-overlay1 ">
            <div className="home-inner container">
              <div className="row">
                <div className="col-sm-12 text-white">
                  <div className="card bg-info card-form">
                    <div className="card-body">
                      <h1 className="display-4">
                        {"  "}
                        Find your &nbsp;
                        <strong>Housing plan</strong>&nbsp;and Get Ready
                        Beforhand &nbsp;
                      </h1>

                      {/* Square check list*/}
                      <div className="d-none d-lg-block ">
                        <div className="d-flex">
                          <h1 className="display-2">Coming Soon</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MainFooter />
      </div>
    );
  }
}

export default HousingContain;
