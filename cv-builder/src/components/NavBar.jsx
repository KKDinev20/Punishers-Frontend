import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../App.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Site Name
      </Link>
      <ul>
        <CustomLink to="/pricing">Pricing</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/category1">Category 1</CustomLink>
        <CustomLink to="/category2">Category 2</CustomLink>
        <CustomLink to="/category3">Category 3</CustomLink>
      </ul>
      <div className="auth-buttons">
        <Link to="/login" className="auth-button">
          Login
        </Link>
        <Link to="/signup" className="auth-button">
          Sign up
        </Link>
      </div>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  return (
    <li>
      <NavLink to={to} {...props} activeClassName="active">
        {children}
      </NavLink>
    </li>
  );
}
