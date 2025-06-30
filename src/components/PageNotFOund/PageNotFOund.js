import React from "react";
import "./PageNotFOund.css";
import { Link } from "react-router-dom";
export default function PageNotFOund() {
  return (
    <div className="not-found-container">
      <div className="content">
        <h2>Lost Your Way ?</h2>
        <p>
          Sorry, we can't find that page. You'll find lots to explore on the
          home page.
        </p>
        <Link to={"/"}>
          <button>Home</button>
        </Link>
      </div>
    </div>
  );
}
