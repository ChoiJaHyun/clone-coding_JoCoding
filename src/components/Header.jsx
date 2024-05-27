import React from "react";
import Navbar from "./Navbar";
import banner from "/images/banner.jpeg";
import "./Header.css";

const Header = () => {
  return (
    <header
      className="main-header"
      id="header"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div
        className="bg-color"
        style={{
          height: "598.85px",
          width: "100%",
          backgroundColor: "transparent",
          fontFamily: "Open Sans, sans-serif",
          fontSize: "14px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <div
          className="wrapper wow fadeInUp delay-05s animated"
          style={{
            width: "1140px",
            height: "598.85px",
            backgroundColor: "transparent",
            fontFamily: "Open Sans, sans-serif",
            fontSize: "14px",
            padding: "90px 0px 130px",
            textAlign: "center",
            position: "relative",
          }}
        >
          <div style={{ position: "absolute", top: "0", width: "100%" }}>
            <Navbar />
          </div>
          <h2
            className="top-title"
            style={{
              width: "1140px",
              height: "38px",
              color: "#FFFFFF",
              fontFamily: "Lato, sans-serif",
              fontSize: "27px",
              fontWeight: "bold",
              margin: "20px 0px 10px",
              paddingTop: "30px",
            }}
          >
            Web Design & Development
          </h2>
          <h3
            className="title"
            style={{
              width: "1140px",
              height: "138px",
              color: "#FFFFFF",
              fontFamily: "Lato, sans-serif",
              fontSize: "123px",
              margin: "20px 0px 10px",
              padding: "25px 0px",
            }}
          >
            조코딩 홈페이지
          </h3>
          <h4
            className="sub-title"
            style={{
              width: "1140px",
              height: "71px",
              color: "#FFFFFF",
              fontFamily: "Lato, sans-serif",
              fontSize: "50px",
              margin: "10px 0px",
            }}
          >
            We Create amazing designs
          </h4>
          <a href="https://developerdk.tistory.com/">
            <button
              type="submit"
              className="btn btn-submit"
              style={{
                width: "232.82px",
                height: "46.85px",
                color: "#333333",
                fontFamily: "Open Sans, sans-serif",
                fontSize: "16px",
                backgroundColor: "#FFD34E",
                margin: "25px 0px 0px",
                padding: "10px 40px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Download Now
            </button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
