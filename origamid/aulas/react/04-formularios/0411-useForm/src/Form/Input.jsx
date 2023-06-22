import React from "react";

const Input = ({
  id,
  label,
  onChange,
  value,
  type,
  onBlur,
  placeholder,
  error,
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={onBlur}
        value={value}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
};

export default Input;
