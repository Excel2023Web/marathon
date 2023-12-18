import React from "react";
// eslint-disable-next-line
import {
  Home,
  About,
  // Sponsors,
  Contact,
  Schedule,
  // Perks,
  AboutExcel,
  Gallery,
} from "../../components";
import CustomTitle from "../../utils/CustomTitle";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landingPage">
      <CustomTitle title="Excel 2023"/>
      <Home />
      <About />
      {/* <Perks /> */}
      {/* <Sponsors /> */}
      <Schedule />
      <AboutExcel />
      <Gallery />
      <Contact />
    </div>
  );
}

export default LandingPage;
