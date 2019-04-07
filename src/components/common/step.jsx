import React from "react";
import { Icon, Grid, Step } from "semantic-ui-react";

const Stepper = () => (
  <div class="row">
    <div class="col-md-12">
      <ul class="stepper stepper-horizontal">
        <li class="completed">
          <span class="circle">1</span>
          <span class="label">
            The size of the bubble indicates its popularity
          </span>
        </li>

        <li class="completed">
          <span class="circle">2</span>
          <span class="label">
            This indicates the number of people employed in each occupation
          </span>
        </li>

        <li class="completed">
          <span class="circle">3</span>
          <span class="label">
            This shows the potential growth of an occupation
          </span>
        </li>
      </ul>
    </div>
  </div>
);

export default Stepper;
