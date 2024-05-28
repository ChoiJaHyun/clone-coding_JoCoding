import React from "react";
import "../css/bootstrap.min.css";
import "../css/font-awesome.min.css";

const Navbar = () => {
  const navbarStyle = {
    width: "1212px",
    height: "120px",
    backgroundColor: "transparent",
    fontFamily: "Open Sans, sans-serif",
    fontSize: "14px",
    padding: "40px 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const navbarBrandStyle = {
    color: "#FFFFFF",
    fontFamily: "Lato, sans-serif",
    fontSize: "34px",
  };

  const ulWrapperStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "399.02px",
    height: "40px",
    backgroundColor: "transparent",
    fontFamily: "Open Sans, sans-serif",
    fontSize: "14px",
  };

  const ulStyle = {
    display: "flex",
    alignItems: "center",
    listStyleType: "none",
    margin: 0,
    padding: 0,
  };

  const liStyle = {
    marginLeft: "10px",
  };

  const linkStyle = {
    textDecoration: "none",
  };

  const contactStyle = {
    width: "103.34px",
    height: "40px",
    color: "#FFFFFF",
    fontFamily: "Open Sans, sans-serif",
    fontSize: "14px",
    padding: "10px 20px",
    backgroundColor: "transparent",
    textDecoration: "none",
  };

  const portfolioStyle = {
    width: "115.9px",
    height: "40px",
    color: "#FFFFFF",
    fontFamily: "Open Sans, sans-serif",
    fontSize: "14px",
    padding: "10px 20px",
    backgroundColor: "transparent",
    textDecoration: "none",
  };

  const featureStyle = {
    width: "98.2px",
    height: "40px",
    color: "#FFFFFF",
    fontFamily: "Open Sans, sans-serif",
    fontSize: "14px",
    padding: "10px 20px",
    backgroundColor: "transparent",
    textDecoration: "none",
  };

  const homeStyle = {
    width: "81.58px",
    height: "40px",
    color: "#FFD34E",
    fontFamily: "Open Sans, sans-serif",
    fontSize: "14px",
    padding: "10px 20px",
    backgroundColor: "transparent",
    textDecoration: "none",
  };

  return (
    <nav style={navbarStyle}>
      <a className="navbar-brand" href="/" style={navbarBrandStyle}>
        jocoding
      </a>
      <div style={ulWrapperStyle}>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <a href="#header" style={homeStyle}>
              Home
            </a>
          </li>
          <li style={liStyle}>
            <a href="#feature" style={featureStyle}>
              Feature
            </a>
          </li>
          <li style={liStyle}>
            <a href="#portfolio" style={portfolioStyle}>
              Portfolio
            </a>
          </li>
          <li style={liStyle}>
            <a href="#contact" style={contactStyle}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
