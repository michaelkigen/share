import React from "react";
import { BiChevronLeft } from "react-icons/bi";

const RegistrationFormHeader = ({ values }) => {
  const { page, pageHeaders, navigateToPrevForm } = values;
  return (
    <div className="form__header">
      <div className="form__topHeader ">
        <button onClick={navigateToPrevForm}>
          <BiChevronLeft />
        </button>
        <h4>
          {page === 0
            ? pageHeaders[0]
            : page === 1
            ? pageHeaders[1]
            : pageHeaders[2]}
        </h4>
      </div>
      {page > 1 ? (
        <p className="verification__header">
          we've sent a verification code to brianwgatundu@gmail.com
        </p>
      ) : (
        <p>fill in the information to create your account with Qmelter</p>
      )}
    </div>
  );
};

export default RegistrationFormHeader;
