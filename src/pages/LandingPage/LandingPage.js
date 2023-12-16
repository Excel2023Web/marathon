import React from "react";
// eslint-disable-next-line
import {
  Home,
  About,
  Sponsors,
  Contact,
  Schedule,
  Perks,
  AboutExcel,
  Gallery,
} from "../../components";

import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landingPage">
      <Home />
      <About />
      <Perks />
      <Sponsors />
      <Schedule />
      <AboutExcel />
      <Gallery />
      <Contact />
    </div>
  );
}

export default LandingPage;
