import React, { Component } from "react";
import {
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Segment
} from "semantic-ui-react";

const MainFooter = () => {
  return (
    <Segment
      color="black"
      style={{ margin: "0em 0em 0em", padding: "3em 0em" }}
      vertical
      id="mainFooter"
    >
      <Container textAlign="center">
        <Grid columns={3} divided stackable>
          <Grid.Row>
            <Grid.Column>
              <Header inverted as="h4" content="Leaving   Care" />
              <List link inverted>
                <List.Item
                  as="a"
                  href="https://services.dhhs.vic.gov.au/leaving-care-service-providers"
                  target="_blank"
                >
                  Leaving care service providers
                </List.Item>
                <List.Item
                  as="a"
                  href="http://www.cpmanual.vic.gov.au/advice-and-protocols/advice/out-home-care/leaving-care
                 "
                  target="_blank"
                >
                  Leaving care advice
                </List.Item>
                <List.Item
                  as="a"
                  href="http://www.cpmanual.vic.gov.au/policies-and-procedures/out-home-care/leaving-care
                 "
                  target="_blank"
                >
                  Leaving care procedure
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <Header inverted as="h4" content="Living Skills" />
              <List link inverted>
                <List.Item
                  as="a"
                  href="https://www.vicroads.vic.gov.au/licences"
                  target="_blank"
                >
                  {" "}
                  Living skills for roads
                </List.Item>
                <List.Item
                  as="a"
                  href="http://www.tac.vic.gov.au/"
                  target="_blank"
                >
                  Transport accident commission
                </List.Item>
                <List.Item
                  as="a"
                  href="https://www.infochoice.com.au//banking"
                  target="_blank"
                >
                  Compare interest rates
                </List.Item>
                <List.Item
                  as="a"
                  href="https://www.humanservices.gov.au/individuals/centrelink
"
                  target="_blank"
                >
                  Special help for housing
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <Header inverted as="h4" content="Career Explore" />
              <List link inverted>
                <List.Item
                  as="a"
                  href="https://joboutlook.gov.au/CareerQuiz.aspx"
                  target="_blank"
                >
                  {" "}
                  Career quiz
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider inverted section />
        <Image
          src={require(`../../img/teamlogo_white.png`)}
          centered
          size="tiny"
        />
        <List horizontal inverted divided link size="small">
          <List.Item>
            Copyright &copy; {new Date().getFullYear()} Hijacks Team
          </List.Item>
        </List>
      </Container>
    </Segment>
  );
};

export default MainFooter;
