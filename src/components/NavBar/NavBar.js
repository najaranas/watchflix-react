import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

export default function NavBar({ categories }) {
  if (!categories) {
    return (
      <div className="nav-bar">
        <h2>Genre</h2>
      </div>
    );
  }

  return (
    <div className="nav-bar">
      <h2>Genre</h2>
      <ul className="categories">
        {categories.length ? (
          categories.map((item, index) => {
            if (!item.name) {
              return null;
            }
            return (
              <li key={index} className="category-type">
                <NavLink to={"/" + item.name.toLowerCase().replace(/ /g, "-")}>
                  {item.name}
                </NavLink>
              </li>
            );
          })
        ) : (
          <span>No Categories Found</span>
        )}
      </ul>
      <div className="copy-right">&copy; Anas Najar 2024</div>
      <div className="social-links">
        <a href="https://github.com/najaranas" className="social-link" title="GitHub" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/anasnajar" className="social-link" title="LinkedIn" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
       
      </div>
    </div>
  );
}
