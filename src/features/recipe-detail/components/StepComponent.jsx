import React from "react";

const StepComponent = ({ manualImg, manualText }) => {
  return (
    <div className="mt-[50px] w-full flex justify-center flex-col gap-[50px]">
      {manualImg.map((img, index) => (
        <div className="flex max-md:flex-col max-md:items-center" key={index}>
          <div className="repeat-box-img">
            <img
              className="w-[320px] rounded-[10px] max-md:w-[300px] max-md:mb-[20px]"
              src={img}
            />
          </div>
          <div className="repeat-box-contents">
            <div className="ms-4 text-[20px] font-normal max-md:text-[18px]">
              <div className="text-white text-center bg-[#ed0c0c] rounded-[30px] py-[7px] px-[10px] font-medium w-[90px] mb-[8px] max-md:py-[3px] max-md:px-[5px] max-md:mb-[10px]">
                STEP{index + 1}{" "}
              </div>
              {manualText[index].substr(2)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StepComponent;
