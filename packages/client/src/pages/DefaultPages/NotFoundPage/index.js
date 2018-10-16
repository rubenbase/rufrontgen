import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <div className="text-center">
    <div className="w-50 d-inline-block pt-5 pb-5 mt-5 mb-5">
      <h1 className="mb-4">
        <strong>Error 404</strong>
      </h1>
      <p className="mb-4">
        The page you are looking for does not exist it may have been moved, or
        removed altogether. You might want to try the search function.
        Alternatively, return to the front page.
      </p>
      <Link to="/" className="btn">
        Go back to the main page
      </Link>
    </div>
  </div>
);

export default NotFoundPage;
