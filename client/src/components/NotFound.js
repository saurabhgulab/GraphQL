import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const NotFound = () => {
  return (
    <div>
      <h4>Error 404: Page not found</h4>
      <div className="giphy">
        <iframe
          src="https://giphy.com/embed/fWBq7hTuDjGYoBEuHF"
          width="480"
          height="269"
          title="unique"
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <Link to="/">
          <h4>
            <Button variant="outlined">Home</Button>
          </h4>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
