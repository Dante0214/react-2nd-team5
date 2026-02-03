import React from "react";
import Select from "react-select";

const SelectMenu = ({ handleSelectChange, selectValue }) => {
  // Select 컴포넌트의 옵션 설정
  const options = [
    { value: "", label: "분류" },
    { value: "반찬", label: "반찬" },
    { value: "국&찌개", label: "국&찌개" },
    { value: "후식", label: "후식" },
    { value: "일품", label: "일품" },
    { value: "밥", label: "밥" },
    { value: "기타", label: "기타" },
  ];

  // 현재 선택된 값을 찾음
  const selectedOption = options.find((option) => option.value === selectValue);

  const customStyles = {
    control: (provided) => ({
      ...provided,
      cursor: "pointer",
      border: "none",
      boxShadow: "none",
      "&:hover": {
        border: "none",
      },
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      padding: "1rem",
      color: "black",
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? state.isFocused
          ? "#616161"
          : "white"
        : state.isFocused
          ? "#616161"
          : provided.backgroundColor,
      color: state.isFocused ? "white" : "black",
    }),
  };

  return (
    <div className="form-group">
      <Select
        styles={customStyles}
        value={selectedOption}
        className="react-select-container"
        classNamePrefix="react-select"
        defaultValue={options[0]}
        onChange={handleSelectChange}
        options={options}
        isSearchable={false}
      />
    </div>
  );
};

export default SelectMenu;
