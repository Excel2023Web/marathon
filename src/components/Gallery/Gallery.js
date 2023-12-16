import React from "react";
import "./Gallery.css";
// import { images } from "../../data/gallery";
const Gallery = () => {
  return (
    <div className="gallery__container">
      <h1
        className="section__title"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        Headstart 2022
      </h1>
      <div className="gallery__content_container">
        <img src="https://avatars.githubusercontent.com/u/75477017?v=4" alt="" />
        <img src="https://avatars.githubusercontent.com/u/75477017?v=4" alt="" />
        <img src="https://avatars.githubusercontent.com/u/75477017?v=4" alt="" />
        <img src="https://avatars.githubusercontent.com/u/75477017?v=4" alt="" />
        <img src="https://avatars.githubusercontent.com/u/75477017?v=4" alt="" />
        <img src="https://avatars.githubusercontent.com/u/75477017?v=4" alt="" />
      </div>
    </div>
  );
};

export default Gallery;
