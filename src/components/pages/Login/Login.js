import React from "react";
import InputHeader from "../Register/InputHeader";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { showInputError } from "../Register/RegistrationValidation";
import { useFormik } from "formik";
import { LoginValidationSchema } from "./LoginValidationSchema";

const Login = ({setIsRegistered}) => {
  const navigate = useNavigate()
  const { values, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      phoneNumber: "",
      password: "",
    },
    onSubmit:async() => {
      const response = await fetch('http://127.0.0.1:8000/api/user/login/',
      
      {
        method : "POST",
        headers : {"content-type": "application/json"},
        body : JSON.stringify({
                 phone_number: values.phoneNumber,
                 password : values.password
                })  
         }
       ) 
       const data = await response.json()
       if(response.ok){
        navigate("/")
        localStorage.setItem("token",JSON.stringify(data.acess_token
          ))
        setIsRegistered(true)
       }else{
        console.log(data)
       }
    },
  });
  return (
    <div className="main__login">
      <section className="login__container">
        <h4>Login</h4>
        <p>fill in the form below to login to your qmelter account</p>
        <form className="registration__form">
          <div className="input__container">
            <InputHeader
              name="phone Number"
              error={errors.phoneNumber}
              touched={touched.phoneNumber}
            />
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
          </div>
          <div className="input__container">
            <InputHeader
              name="password"
              error={errors.password}
              touched={touched.password}
            />
            <div className="input__holder">
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
              <button type="button">forgot password?</button>
            </div>
          </div>
          <button
            type="submit"
            className="form__nextBtn"
            onClick={handleSubmit}
          >
            login
          </button>
        </form>
        <section>
          <Link to="/register">Don't have an account?Register here</Link>
        </section>
      </section>
    </div>
  );
};

export default Login;
