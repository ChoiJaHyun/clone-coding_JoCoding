import React from "react";
import p1 from "/images/port01.jpg";
import p2 from "/images/port02.jpg";
import p3 from "/images/port03.jpg";
import p4 from "/images/port04.jpg";
import p5 from "/images/port05.jpg";
import p6 from "/images/port06.jpg";

const Portfolio = () => {
  return (
    <section
      className="section-padding wow fadeInUp delay-02s animated"
      id="portfolio"
      style={{
        width: "100%",
        color: "#333333",
        fontFamily: "Open Sans, sans-serif",
        fontSize: "14px",
        padding: "60px 0px",
      }}
    >
      <div className="container" style={{ width: "1170px", margin: "0 auto" }}>
        <div
          className="row"
          style={{
            width: "100%",
            margin: "0px -15px",
          }}
        >
          <div className="col-md-3 col-sm-12">
            <div className="section-title">
              <h2
                className="head-title"
                style={{
                  color: "#2B2B2B",
                  fontSize: "32px",
                  fontFamily: "Lato, sans-serif",
                  margin: "20px 0px 10px",
                }}
              >
                Portfolio
              </h2>
              <hr
                className="botm-line"
                style={{
                  backgroundColor: "#2B2B2B",
                  margin: "20px 0px",
                }}
              />
              <p
                className="sec-para"
                style={{
                  color: "#888888",
                  fontSize: "14px",
                  fontFamily: "Open Sans, sans-serif",
                  margin: "0px 0px 10px",
                }}
              >
                사진들 입니다.
              </p>
            </div>
          </div>
          <div
            className="col-md-9 col-sm-12"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {[
              { img: p1, alt: "Port 1" },
              { img: p2, alt: "Port 2" },
              { img: p3, alt: "Port 3" },
              { img: p4, alt: "Port 4" },
              { img: p5, alt: "Port 5" },
              { img: p6, alt: "Port 6" },
            ].map((item, index) => (
              <div
                key={index}
                className="col-md-4 col-sm-6 padding-right-zero"
                style={{ padding: "15px", width: "30%" }}
              >
                <div className="portfolio-box design">
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="img-responsive"
                    style={{
                      width: "100%",
                      height: "auto",
                      marginBottom: "20px",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
