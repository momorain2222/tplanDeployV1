import React from "react";
import { Icon, Step } from "semantic-ui-react";

const StepperUI = () => (
  <Step.Group className="col-12" ordered>
    <Step>
      <Step.Content>
        <Step.Title>Occuption Popularity</Step.Title>
        <Step.Description>
          The size of the bubble indicates its popularity
        </Step.Description>
      </Step.Content>
    </Step>

    <Step>
      <Step.Content>
        <Step.Title>Employment Number</Step.Title>
        <Step.Description>See the number of people employed</Step.Description>
      </Step.Content>
    </Step>

    <Step>
      <Step.Content>
        <Step.Title>Employment Projection</Step.Title>
        <Step.Description>
          Shows the potential growth of an occupation
        </Step.Description>
      </Step.Content>
    </Step>
  </Step.Group>
);

export default StepperUI;
