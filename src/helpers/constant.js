export const multiSelectStyle = {
  control: (provided) => ({
    ...provided,
    border: "1px solid #ced4da",
    boxShadow: "none",
    "&:hover": {
      border: "1px solid #ced4da",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#292D36" : state.isFocused ? "white" : "white",
    color: state.isSelected ? "white" : "black",
    "&:hover": {
      backgroundColor: state.isSelected ? "#292D36" : "#e9ecef",
      color: state.isSelected ? "white" : "black",
    },
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: "#405189",
    color: "white",
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: "white",
  }),
  multiValueRemove: (provided) => ({
    ...provided,

    color: "white",
    "&:hover": {
      backgroundColor: "#283e68",
      color: "white",
    },
  }),
};
