import React from "react";
import "./SuccessPage.css";
import CustomTitle from '../../utils/CustomTitle'
function SuccessPage() {
  return (
    <div className="successPage">
      <CustomTitle title="Success"/>
      <iframe
        style={{ border: "none" }}
        src="https://lottie.host/embed/c535c564-bd28-4b1a-a7cd-9e84229051f4/T5NeZa11J3.json"
      ></iframe>
      <div className="successPage__header">
        <h1>Thank you for registering</h1>
      </div>
    </div>
  );
}

export default SuccessPage;
