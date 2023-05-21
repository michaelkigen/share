import React, { useContext, useState } from "react";
import { RegisterInputsContext } from "./Register";
import { useFormik } from "formik";
import { firstStepRegistrationValidation } from "./RegistrationValidation";
import InputHeader from "./InputHeader";
import { showInputError } from "./RegistrationValidation";

const FirstStep = ({ setPage }) => {
  const [phoneNumberExist,setPhoneNumberExist] = useState(false)
  const { registerInputs, setRegisterInputs } = useContext(
    RegisterInputsContext
  );
  const { values, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      phoneNumber: registerInputs.phoneNumber,
      password: registerInputs.password,
      confirmPassword: registerInputs.confirmPassword,
    },
    validationSchema: firstStepRegistrationValidation,
    onSubmit: async() => {
      //check if number is in database
   const phone_number = values.phoneNumber
   const response = await fetch("http://127.0.0.1:8000/api/user/phone_number_checker/",{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify({phone_number})
    })

    // display next form if number doesn't exist
     if(response.ok){
      setPage((prevPage) => {
        setRegisterInputs({
          ...registerInputs,
          phoneNumber: values.phoneNumber,
          password: values.password,
          confirmPassword: values.confirmPassword,
        });
        return prevPage + 1;
      });
      return
     }

     //display error is number exist
     if(!response.ok){
      setPhoneNumberExist(true)
     } 
     
    },
  });

  return (
    <section className="registration__form">
      <div className="input__container">
        <InputHeader
          name="password"
          error={errors.phoneNumber}
          touched={touched.phoneNumber}
        />
        <div className="input__holder">
        <input
          type="text"
          placeholder="e.g 0740774613"
          name="phoneNumber"
          className={showInputError(
            errors.phoneNumber,
            touched.phoneNumber,
            "showInput__error"
          )}
          value={values.phoneNumber}
          onChange={handleChange}
        />
       {phoneNumberExist && <div className="input__error phoneNumberExist">phone number already exits</div>}
        </div>
      </div>
      <div className="input__container">
        <InputHeader
          name="password"
          error={errors.password}
          touched={touched.password}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          className={showInputError(
            errors.password,
            touched.password,
            "showInput__error"
          )}
          value={values.password}
          onChange={handleChange}
        />
      </div>
      <div className="input__container">
        <InputHeader
          name="confirm password"
          error={errors.confirmPassword}
          touched={touched.confirmPassword}
        />
        <input
          type="password"
          placeholder="confirm password"
          name="confirmPassword"
          className={showInputError(
            errors.password,
            touched.password,
            "showInput__error"
          )}
          value={values.confirmPassword}
          onChange={handleChange}
        />
      </div>
      <button type="button" className="form__nextBtn" onClick={handleSubmit}>
        continue
      </button>
    </section>
  );
};

export default FirstStep;
