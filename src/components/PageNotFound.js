import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => (
  <div>
    <p>
      404! Page not found. <Link to="/">Go To Home Page</Link>
    </p>
  </div>
);

export default PageNotFound;
