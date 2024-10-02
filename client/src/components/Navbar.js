import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Navbar = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="nav-wrapper">
        <Link to="/" className="app-name">
          Share Something
        </Link>
        <ul id="nav-mobile" className="right ">
          {token ? (
            <>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/create">Create</Link>
              </li>
              <li>
                <Button
                  variant="contained"
                  onClick={() => {
                    localStorage.removeItem("token");
                    navigate("/login");
                  }}
                >
                  Logout
                </Button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
