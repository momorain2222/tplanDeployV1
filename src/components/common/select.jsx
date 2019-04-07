import React from "react";

const Select = ({
  name,
  label,
  options,
  nameProperty,
  valueProperty,
  onChange,
  value
}) => {
  return (
    <div className="btn btn-outline-info text-center" style={{ width: 250 }}>
      <label htmlFor={name}>{label}</label>

      <select
        name={name}
        id={name}
        onChange={e => onChange(e)}
        className="form-control"
        value={value}
      >
        {options.map(option => (
          <option
            key={option[valueProperty]}
            value={option[valueProperty]}
            className="text-center"
          >
            {option[nameProperty]}
          </option>
        ))}
      </select>
    </div>
  );
};

Select.defaultProps = {
  nameProperty: "name",
  valueProperty: "_id"
};

export default Select;
