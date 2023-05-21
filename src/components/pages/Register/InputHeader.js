import React from "react";
import { showInputError } from "./RegistrationValidation";

const InputHeader = ({ name, error, touched }) => {
  const errorMessage = error;
  return (
    <div className="input__header">
      <span className="input__detail">{name}</span>
      <span className="input__error">
        {showInputError(error, touched, errorMessage)}
      </span>
    </div>
  );
};

export default InputHeader;
