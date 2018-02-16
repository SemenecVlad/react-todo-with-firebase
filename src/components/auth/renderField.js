import React from "react";
export const renderField = ({
  input,
  label,
  type,
  placeholder,
  meta: { asyncValidating, touched, error }
}) => (
  <div>
    <label style={{ float: "left" }}>{label}</label>
    <div className={asyncValidating ? "async-validating" : "text-left mb-3"}>
      <input
        className="form-control"
        {...input}
        type={type}
        placeholder={placeholder}
      />
      {touched &&
        error && <div className="alert alert-danger mt-3">{error}</div>}
    </div>
  </div>
);
