import React, { useContext } from "react";
import { RegisterInputsContext } from "./Register";
import { useFormik } from "formik";
import { VerficationCodeValidation } from "./RegistrationValidation";
import { showInputError } from "./RegistrationValidation";

const VerficationCode = () => {
  const { registerInputs, setRegisterInputs } = useContext(
    RegisterInputsContext
  );
  const { values, handleChange, errors, touched, handleSubmit } = useFormik({
    initialValues: {
      firstVerificationCode: registerInputs.firstVerificationCode,
      secondVerificationCode: registerInputs.secondVerificationCode,
      thirdVerificationCode: registerInputs.thirdVerificationCode,
      fourthVerificationCode: registerInputs.fourthVerificationCode,
    },
    validationSchema: VerficationCodeValidation,
    onSubmit: () => {
      setRegisterInputs({
        ...registerInputs,
        firstVerificationCode: values.firstVerificationCode,
        secondVerificationCode: values.secondVerificationCode,
        thirdVerificationCode: values.thirdVerificationCode,
        fourthVerificationCode: values.fourthVerificationCode,
      });
    },
  });

  return (
    <section className="verification__code">
      <div className="verificationInput__container">
        <input
          type="text"
          name="firstVerificationCode"
          className={showInputError(
            errors.firstVerificationCode,
            touched.firstVerificationCode,
            "showInput__error"
          )}
          value={values.firstVerificationCode}
          onChange={handleChange}
        />
        <input
          type="text"
          name="secondVerificationCode"
          className={showInputError(
            errors.secondVerificationCode,
            touched.secondVerificationCode,
            "showInput__error"
          )}
          value={values.secondVerificationCode}
          onChange={handleChange}
        />
        <input
          type="text"
          name="thirdVerificationCode"
          className={showInputError(
            errors.thirdVerificationCode,
            touched.thirdVerificationCode,
            "showInput__error"
          )}
          value={values.thirdVerificationCode}
          onChange={handleChange}
        />
        <input
          type="text"
          name="fourthVerificationCode"
          className={showInputError(
            errors.fourthVerificationCode,
            touched.fourthVerificationCode,
            "showInput__error"
          )}
          value={values.fourthVerificationCode}
          onChange={handleChange}
        />
      </div>
      <button className="submit" type="submit" onClick={handleSubmit}>
        Submit
      </button>
      <button className="request__codeBtn">Request a new code</button>
      <p>
        Din't receive the Verification code?It could take a bit of time, request
        a code in 3s
      </p>
    </section>
  );
};

export default VerficationCode;
