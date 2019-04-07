import React, { Component } from "react";

const QuickLink = ({ title, links }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="py-4 text-left">
          <h3>{title}</h3>

          <div className="text-left mb-5 d-flex flex-column">
            {links.map(link => (
              <div key={link.id}>
                <a href={link.url} className="mb-3 text-white">
                  <p className="display-7">{link.name}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickLink;
