import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import React, { useRef } from "react";

export default function Header() {
  const spinnerRef = useRef();
  const inputRef = useRef();
  const searchFieldRef = useRef();
  const navigate = useNavigate();

  function handleSearch(keyword) {
    navigate(`/search?query=${keyword}`);
  }

  return (
    <header>
      <Link to="/">
        <div className="logo">
          <img src={process.env.PUBLIC_URL + "/assets/logo.png"} alt="logo" />
          <h1>atchflix</h1>
        </div>
      </Link>
      <div className="search-field" ref={searchFieldRef}>
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          ref={inputRef}
          onFocus={() => {
            searchFieldRef.current.classList.add("active");
          }}
          onBlur={() => {
            searchFieldRef.current.classList.remove("active");
          }}
          className="input-field"
          placeholder="Movie name..."
          onChange={(e) => {
            const searchInput = e.target.value;
            spinnerRef.current.classList.add("active");
            setTimeout(() => {
              if (searchInput === e.target.value) {
                handleSearch(e.target.value.toLowerCase());
                spinnerRef.current.classList.remove("active");
                inputRef.current.value = "";
              }
            }, 1000);
          }}
        />
        <i
          className="fa-solid fa-spinner circle-animation"
          ref={spinnerRef}></i>
      </div>
    </header>
  );
}
