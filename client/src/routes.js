import React from "react";

import CreateQuote from "./components/CreateQuote";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import OtherUserProfile from "./components/OtherUserProfile";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/create",
    element: <CreateQuote />,
  },
  {
    path: "/profile/:userid",
    element: <OtherUserProfile />,
  },
];

export default routes;
