import React, { Component } from "react";
import ProfileItem from "./profileItem";

class AboutUs extends Component {
  state = {
    members: [
      {
        id: 1,
        name: "Liwen Liang",
        major: "MIT",
        imageUrl: "person1.jpg",
        skill: [
          "Project Management",
          "Software Enginering",
          "iOS Development",
          "Font-end Development"
        ]
      },
      {
        id: 2,
        name: "Aadharsh Nair",
        major: "MDS",
        imageUrl: "person2.jpg",
        skill: [
          "Project Management",
          "Software Enginering",
          "iOS Development",
          "Font-end Development"
        ]
      },
      {
        id: 3,
        name: "Yaqi Wang",
        major: "MBIS",
        imageUrl: "person3.jpg",
        skill: [
          "Project Management",
          "Software Enginering",
          "iOS Development",
          "Font-end Development"
        ]
      },
      {
        id: 4,
        name: "Nitish ",
        major: "MBIS",
        imageUrl: "person4.jpg",
        skill: [
          "Project Management",
          "Software Enginering",
          "iOS Development",
          "Font-end Development"
        ]
      }
    ]
  };

  render() {
    return (
      <div className="banner">
        <div className="py-5 bg-info text-white text-center">
          <h1>Hijacks Team Members</h1>
          <p>Connect with developers</p>
        </div>
        <div className="container">
          <div className="row">
            <ProfileItem profiles={this.state.members} />
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
