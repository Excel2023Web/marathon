import React from "react";
import "./AboutExcel.css";
import excelLogo from '../../assets/png/excel_logo_text.png'
const AboutExcel = () => {
  return (
    <div className="abt__excel_main">
      <h1
        className="section__title"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        Excel 2023
      </h1>
      <div className="abt__excel_content_contain">
        <img src={excelLogo} className="excel_abt_logo" alt="excel 2023" />
        <p>
          Introducing IBeTo - Innovabt__excel_content_containations for a Better Tomorrow, the flagship
          event of Excel 2023, the annual national-level technical symposium of
          Govt. Model Engineering College, Thrikkakara. IBeTo is a unique
          platform where we actively pursue the extraordinary and tackle social
          issues. Here, dreams become reality, visionaries blaze new trails, and
          aspiring leaders strive for a global impact.
        </p>
      </div>
    </div>
  );
};

export default AboutExcel;
