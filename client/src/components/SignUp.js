import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { SIGNUP_USER } from "../gqlOperations/mutations";

const SignUp = () => {
  const [formData, setFormData] = useState("");
  const [signupUser, { loading, error, data }] = useMutation(SIGNUP_USER);
  if (loading)
    return (
      <div className="progress">
        <div className="indeterminate"></div>
      </div>
    );

  if (error) {
    console.log(error.message);
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    signupUser({
      variables: {
        userNew: formData,
      },
    });
  };
  return (
    <div className="container my-container">
      {error && (
        <div className="container">
          <Alert severity="error">
            <AlertTitle>Email already exists.</AlertTitle>
          </Alert>
        </div>
      )}
      {data && data.user && (
        <div>
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            This is a success Alert with an encouraging title.
          </Alert>
        </div>
      )}
      <h5 className="header_1">SignUp Form</h5>
      <form className="form_1" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="first name"
          required
          name="firstName"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="last name"
          required
          name="lastName"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="email"
          required
          name="email"
          onChange={handleChange}
        />

        <input
          type="password"
          placeholder="password"
          required
          name="password"
          onChange={handleChange}
        />

        <button className="btn submit_button_1" type="submit" name="action">
          Submit
          <i className="material-icons right">arrow_forward</i>
        </button>
        <Link to="/login">
          <p>Already have an account?</p>
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
