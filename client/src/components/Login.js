import { useMutation } from "@apollo/client";
import { Alert, AlertTitle } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN_USER } from "../gqlOperations/mutations";

const Login = () => {
  const [formData, setFormData] = useState("");
  const navigate = useNavigate();
  const [loginUser, { loading, error, data }] = useMutation(LOGIN_USER, {
    onCompleted(data) {
      localStorage.setItem("token", data.user.token);
      navigate("/");
    },
  });

  if (loading)
    return (
      <div className="progress">
        <div className="indeterminate"></div>
      </div>
    );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser({
      variables: { userSignin: formData },
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
      <h5 className="header_1">Login Form</h5>
      <form className="form_1" onSubmit={(e) => handleSubmit(e)}>
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
        <Link to="/signup">
          <p>Don't have an account?</p>
        </Link>
      </form>
    </div>
  );
};

export default Login;
