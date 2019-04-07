import React, { Component } from "react";
import Check from "../common/check";

const RightsCheckList = ({ programs }) => {
  return (
    <table className="  table ui selectable  fixed ">
      <thead>
        <tr className="center aligned">
          <th>Eligible</th>
          <th>Program Name</th>
          <th>Description </th>
          <th>Click Me</th>
        </tr>
      </thead>

      <tbody>
        {programs.map(program => (
          <tr key={program._id} className="center aligned">
            <td className="center aligned">
              <Check isChecked={program.isChecked} />
            </td>

            <td className="h5 left aligned">
              <p className="display-7">
                <strong>{program.name}</strong>
              </p>
            </td>

            <td className="h5 left aligned">
              <p className="display-7">{program.outcome}</p>
            </td>

            <td className="center aligned">
              <div className="ui btn-info label ">
                <a target="_blank" href={program.url}>
                  <p>Read More</p>
                </a>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RightsCheckList;
