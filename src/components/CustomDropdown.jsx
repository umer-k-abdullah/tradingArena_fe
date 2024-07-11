import React from "react";
import Select from "react-select";

const CustomDropdown = ({ options, field, form }) => {
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "black" : "white",
      backgroundColor: state.isSelected ? "lightgray" : "transparent",
      display: "flex",
      alignItems: "center",
    }),
    control: (provided) => ({
      ...provided,
      backgroundColor: "transparent",
      color: "white",
      borderColor: "transparent",
      boxShadow: "none",
      outline: "none",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "white",
      display: "flex",
      alignItems: "center",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "black",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "white",
    }),
  };

  const handleChange = (selectedOption) => {
    form.setFieldValue(field.name, selectedOption.value);
  };

  const optionsWithIcons = options.map((option) => ({
    value: option.name,
    label: <div className="flex items-center">{option.icon}</div>,
  }));

  return (
    <Select
      styles={customStyles}
      options={optionsWithIcons}
      value={optionsWithIcons.find((option) => option.value === field.value)}
      onChange={handleChange}
    />
  );
};

export default CustomDropdown;
