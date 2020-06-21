import React, { Component } from "react";
import chroma from "chroma-js";
import "./Select.css";
import AsyncSelect from "react-select/async";
import Select from "react-select";

const ChooseCity = [
  {
    label: " Choose a city",
  },
];
const colourOptions = [
  {
    key: 1,
    label: " sousse medina",
  },
  {
    key: 2,
    label: " Hamem sousse",
  },
  {
    key: 3,
    label: " Sahloul",
  },
  {
    key: 4,
    label: " Jawhara",
  },
  {
    key: 5,
    label: " Galaa sghira",
  },
  {
    key: 6,
    label: " Galaa Kbira",
  },
];

const dot = (color = "#ccc") => ({
  alignItems: "center",
  display: "flex",

  ":before": {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: "block",
    marginRight: 8,
    height: 10,
    width: 10,
  },
});

const colourStyles = {
  control: (styles) => ({ ...styles, backgroundColor: "white" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isFocused ? "#fed700" : "white",

      color: "#757575",
      cursor: isDisabled ? "not-allowed" : "default",
    };
  },
};

const filterColors = (inputValue: string) => {
  return colourOptions.filter((i) =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  );
};

const loadOptions = (inputValue, callback) => {
  setTimeout(() => {
    callback(filterColors(inputValue));
  }, 1000);
};

export default class SelectPage extends Component {
  handleInputChange = (newValue: string) => {
    const inputValue = newValue.replace(/\W/g, "");
    this.setState({ inputValue });
    return inputValue;
  };

  render() {
    return (
      <div>
        <Select
          options={colourOptions}
          defaultValue={ChooseCity[0]}
          onInputChange={this.handleInputChange}
          theme={(theme) => ({
            ...theme,

            borderRadius: 7,

            colors: {
              neutral20: "#235789",
              primary25: "#fff",
              primary: "#fed700",
            },
          })}
        />
      </div>
    );
  }
}
