import React, { useContext } from "react";
import { RegisterInputsContext } from "./Register";
import { useFormik } from "formik";
import { PersonalInfoRegistrationValidaation } from "./RegistrationValidation";
import { showInputError } from "./RegistrationValidation";
import InputHeader from "./InputHeader";
import { useNavigate } from "react-router-dom";

const PersonalInfo = ({ setPage }) => {
  const { registerInputs, setRegisterInputs } = useContext(
    RegisterInputsContext
  );
  const navigate = useNavigate()
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      firstName: registerInputs.firstName,
      lastName: registerInputs.lastName,
      email: registerInputs.email,
    },
    validationSchema: PersonalInfoRegistrationValidaation,
    onSubmit: async(values) => {
      console.log(values)
      const response = await fetch("http://127.0.0.1:8000/api/user/register/",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify({ 
          phone_number:registerInputs.phoneNumber,
          email:values.email,
          first_name: values.firstName,
          last_name:values.lastName,
          password:registerInputs.password ,
          confirm_password: registerInputs.confirmPassword})
      })
      console.log(registerInputs)
      const data =  await response.json();

      if(response.ok){
        localStorage.setItem("token",JSON.stringify(data.acess_token
          ))
          navigate("/")
      }else{
        console.log(data)
      }

      //move to next form
      // setPage((prevPage) => {
      //   setRegisterInputs(() => {
      //     return {
      //       ...registerInputs,
      //       firstName: values.firstName,
      //       lastName: values.lastName,
      //       email: values.email,
      //     };
      //   });
      //   const { phoneNumber } = registerInputs;
      //   const { firstName, lastName, email } = values;
      //   sessionStorage.setItem(
      //     "registerInputs",
      //     JSON.stringify({ phoneNumber, firstName, lastName, email })
      //   );
      //   return prevPage + 1;
      // });
    },
  });

  return (
    <section className="registration__form">
      <div className="input__container">
        <InputHeader
          name="first name"
          error={errors.firstName}
          touched={touched.firstName}
        />
        <input
          type="text"
          name="firstName"
          className={showInputError(
            errors.firstName,
            touched.firstName,
            "showInput__error"
          )}
          value={values.firstName}
          onChange={handleChange}
        />
      </div>
      <div className="input__container">
        <InputHeader
          name="last name"
          error={errors.lastName}
          touched={touched.lastName}
        />
        <input
          type="text"
          name="lastName"
          className={showInputError(
            errors.lastName,
            touched.lastName,
            "showInput__error"
          )}
          value={values.lastName}
          onChange={handleChange}
        />
      </div>
      <div className="input__container">
        <InputHeader
          name="email"
          error={errors.email}
          touched={touched.email}
        />
        <input
          type="email"
          placeholder="johndoe@gmail.com"
          name="email"
          className={showInputError(
            errors.email,
            touched.email,
            "showInput__error"
          )}
          value={values.email}
          onChange={handleChange}
        />
      </div>
      <button type="button" className="form__nextBtn" onClick={handleSubmit}>
        continue
      </button>
    </section>
  );
};

export default PersonalInfo;
