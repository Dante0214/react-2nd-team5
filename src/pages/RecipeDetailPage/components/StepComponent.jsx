import React from "react";
import "./StepComponent.style.css";

const StepComponent = ({ manualImg, manualText }) => {
  return (
    <div className="recipe-step">
      {manualImg.map((img, index) => (
        <div className="repeat-box" key={index}>
          <div className="repeat-box-img">
            <img className="step-img" src={img} />
          </div>
          <div className="repeat-box-contents">
            <div className="ms-4 step-text">
              <div className="step-num">STEP{index + 1} </div>
              {manualText[index].substr(2)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StepComponent;
