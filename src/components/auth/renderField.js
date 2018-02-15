import React from "react";
export const renderField = ({
  input,
  label,
  type,
  meta: { asyncValidating, touched, error }
}) => (
  <div>
    <label>{label}</label>
    <div className={asyncValidating ? "async-validating" : ""}>
      <input
        className="form-control"
        {...input}
        type={type}
        placeholder={label}
      />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);
