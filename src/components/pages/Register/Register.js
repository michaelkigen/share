import React, { useState, createContext, useEffect } from "react";
import { BiChevronLeft } from "react-icons/bi";
import FirstStep from "./FirstStep";
import PersonalInfo from "./PersonalInfo";
import VerficationCode from "./VerficationCode";
import RegistrationFormHeader from "./RegistrationFormHeader";
import ProgressBar from "./ProgressBar";

export const RegisterInputsContext = createContext();

const Register = () => {
  const [page, setPage] = useState(0);
  const pageHeaders = ["register", "personal info", "verification "];
  const [registerInputs, setRegisterInputs] = useState({
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    email: "",
    firstVerificationCode: "",
    secondVerificationCode: "",
    thirdVerificationCode: "",
    fourthVerificationCode: "",
  });

  // change color in progress bar to show current form
  const ChangeSpanColor = (number) => {
    if (page >= number) {
      return { backgroundColor: "orange" };
    } else {
      return { backgroundColor: "#d9d9d9" };
    }
  };

  // display next form
  const navigateToPrevForm = () => {
    if (page <= 0) {
      setPage(0);
    } else {
      setPage((prevPage) => {
        return prevPage - 1;
      });
    }
  };

  // restore inputs after refreshing
  useEffect(() => {
    const prevInputs = JSON.parse(sessionStorage.getItem("registerInputs"));
    if (prevInputs) {
      setRegisterInputs({
        phoneNumber: prevInputs.phoneNumber,
        password: "",
        confirmPassword: "",
        firstName: prevInputs.firstName,
        lastName: prevInputs.lastName,
        email: prevInputs.email,
        firstVerificationCode: "",
        secondVerificationCode: "",
        thirdVerificationCode: "",
        fourthVerificationCode: "",
      });
      return;
    }
  }, []);

  return (
    <div className="main__registrationContainer">
      <ProgressBar ChangeSpanColor={ChangeSpanColor} page={page} />
      <div className="register__container">
        <RegistrationFormHeader
          values={{ page, navigateToPrevForm, pageHeaders }}
        />
        <form className="form__container">
          <RegisterInputsContext.Provider
            value={{ registerInputs, setRegisterInputs }}
          >
            {page === 0 && <FirstStep setPage={setPage} />}
            {page === 1 && <PersonalInfo setPage={setPage} />}
            {page === 2 && <VerficationCode />}
          </RegisterInputsContext.Provider>
        </form>
      </div>
    </div>
  );
};

export default Register;
