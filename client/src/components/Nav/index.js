import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/search">
        Search Google Books
      </a>
      <Link to={"/books/"}>
        <button className="submitBtn" href="/" onClick={() => "Library.js"}>Submissions</button>   
      </Link> 
    </nav>
  );
}

export default Nav;
