import React, { Component } from "react";

const Banner = ({ imgIds }) => {
  return (
    <section id="showcase">
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active" />
          <li data-target="#myCarousel" data-slide-to="1" />
          <li data-target="#myCarousel" data-slide-to="2" />
        </ol>

        <div className="carousel-inner">
          {imgIds.map(id => (
            <div
              className={`carousel-item carousel-image-${id} ${
                id === 1 ? "active" : ""
              }`}
              key={id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
