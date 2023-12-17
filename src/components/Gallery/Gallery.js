import React from "react";
import "./Gallery.css";
// import { images } from "../../data/gallery";
import hs1 from '../../assets/png/hs1.jpg'
import hs2 from '../../assets/png/hs2.JPG'
import hs3 from '../../assets/png/hs3.JPG'
// import hs4 from '../../assets/png/hs4.JPG'
import hs5 from '../../assets/png/hs5.JPG'
import hs6 from '../../assets/png/hs6.JPG'
import hs7 from '../../assets/png/hs7.JPG'
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
        <img src={hs1} alt="" />
        <img src={hs2} alt="" />
        <img src={hs3} alt="" />
        <img src={hs7} alt="" />
        <img src={hs5} alt="" />
        <img src={hs6} alt="" />
      </div>
    </div>
  );
};

export default Gallery;
