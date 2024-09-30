import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate("/");
  };
  return (
    <div className="container my-container">
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
