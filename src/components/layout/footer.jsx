import React, { Component } from "react";

import { Container, List, Segment } from "semantic-ui-react";

const Footer = () => {
  return (
    <Segment style={{ margin: "5em 0em 0em", padding: "3em 0em" }} vertical>
      <Container textAlign="center">
        <List horizontal divided link size="small">
          <List.Item>
            Copyright &copy; {new Date().getFullYear()} Hijacks Team
          </List.Item>
        </List>
      </Container>
    </Segment>
  );
};

export default Footer;
