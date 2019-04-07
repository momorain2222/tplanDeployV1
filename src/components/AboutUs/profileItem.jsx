import React, { Component } from "react";

class ProfileItem extends Component {
  render() {
    const { profiles } = this.props;
    console.log(profiles);

    return (
      <div className="m-5 p-4 col">
        {profiles.map(profile => (
          <div className="row mb-5" key={profile.id}>
            <div className="col-sm-3 text-center mr-5" key={profile.id}>
              <img
                src={require(`../../img/${profile.imageUrl}`)}
                className="img-fluid rounded-circle mb-2"
                alt=""
              />
              <h4>{profile.name}</h4>
              <p>
                {" "}
                {profile.major}
                {console.log(profile.imageUrl)}
              </p>
            </div>

            <div className="col-sm-7">
              <h4 className="mt-3">SKill Sets</h4>
              <div className="d-none d-block">
                <ul className="list-group">
                  {profile.skill.map((skill, index) => (
                    <li className="list-group-item mt-2" key={index}>
                      <i className="fa fa-check pr-4" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default ProfileItem;
