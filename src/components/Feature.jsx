import React from "react";
import paintbrush from "/images/paintbrush.png";
import cogs from "/images/cogs.png";
import mobile from "/images/mobile.png";
import desktop from "/images/desktop.png";
import lightbulb from "/images/lightbulb.png";
import clock from "/images/clock.png";

const Feature = () => {
  return (
    <section
      id="feature"
      className="section-padding"
      style={{
        width: "100%",
        height: "635.58px",
        color: "#333333",
        fontFamily: "Open Sans, sans-serif",
        backgroundColor: "#F8F8F8",
        padding: "60px 0 0 60px",
      }}
    >
      <div className="container">
        <div
          className="row"
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: "100%",
            margin: "0 120px 0 120px",
          }}
        >
          <div className="col-md-4">
            <div className="section-title">
              <h2
                className="head-title"
                style={{
                  width: "262.5px",
                  height: "35.2px",
                  color: "#2B2B2B",
                  fontFamily: "Lato, sans-serif",
                  fontSize: "32px",
                  margin: "25px 0 10px ",
                }}
              >
                Features
              </h2>
              <hr
                className="botm-line bold-line"
                style={{
                  border: "1.5px solid black",
                  width: "10%",
                  margin: "30px 0px",
                }}
              />
              <p
                className="txt-para"
                style={{
                  width: "295.75px",
                  height: "42px",
                  color: "#888888",
                  fontSize: "14px",
                  fontFamily: "Open Sans, sans-serif",
                  margin: "30px 0px 10px",
                }}
              >
                조코딩의 기초 튜토리얼 페이지입니다. 템플릿을 이용하여 5분 내로
                만들고 deploy까지 완료할 수 있습니다.
              </p>
            </div>
          </div>
          <div className="col-md-4 mr-30">
            <div className="icon-text" style={{ display: "flex" }}>
              <div className="icon">
                <img
                  src={paintbrush}
                  alt="Paintbrush Icon"
                  style={{ margin: "25px 30px" }}
                />
              </div>
              <div style={{ width: "100%" }}>
                <h3
                  className="txt-tl"
                  style={{
                    width: "295.75px",
                    height: "32.4px",
                    color: "#333333",
                    fontSize: "24px",
                    fontFamily: "Lato, sans-serif",
                    margin: "30px 20px 10px",
                  }}
                >
                  Easy to Learn and Design
                </h3>
                <p
                  className="txt-para"
                  style={{
                    width: "295.75px",
                    height: "42px",
                    color: "#888888",
                    fontSize: "14px",
                    fontFamily: "Open Sans, sans-serif",
                    margin: "10px 0px 10px",
                  }}
                >
                  유튜브 조코딩 채널의 html의 기초 2강을 참고해주세요.
                </p>
              </div>
            </div>

            <div className="icon-text" style={{ display: "flex" }}>
              <div className="icon">
                <img
                  src={desktop}
                  alt="Desktop Icon"
                  style={{ margin: "140px 30px" }}
                />
              </div>
              <div style={{ width: "100%" }}>
                <h3
                  className="txt-tl"
                  style={{
                    width: "295.75px",
                    height: "32.4px",
                    color: "#333333",
                    fontSize: "24px",
                    fontFamily: "Lato, sans-serif",
                    margin: "140px 20px 10px",
                  }}
                >
                  No Coding, No Shortcodes
                </h3>
                <p
                  className="txt-para"
                  style={{
                    width: "295.75px",
                    height: "42px",
                    color: "#888888",
                    fontSize: "14px",
                    fontFamily: "Open Sans, sans-serif",
                    margin: "40px 0px 10px",
                  }}
                >
                  템플릿을 이용하게되면 별다른 코딩이 필요 없죠!
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="icon-text" style={{ display: "flex" }}>
              <div className="icon">
                <img
                  src={cogs}
                  alt="Cogs Icon"
                  style={{ margin: "25px 30px" }}
                />
              </div>
              <div style={{ width: "100%" }}>
                <h3
                  className="txt-tl"
                  style={{
                    width: "295.75px",
                    height: "32.4px",
                    color: "#333333",
                    fontSize: "24px",
                    fontFamily: "Lato, sans-serif",
                    margin: "20px 20px 10px",
                  }}
                >
                  Bootstrap 3.3.2
                </h3>
                <p
                  className="txt-para"
                  style={{
                    width: "295.75px",
                    height: "42px",
                    color: "#888888",
                    fontSize: "14px",
                    fontFamily: "Open Sans, sans-serif",
                    margin: "10px 0px 10px",
                  }}
                >
                  위에 써진 부트스트랩도 조만간 다루겠습니다.
                </p>
              </div>
            </div>

            <div className="icon-text" style={{ display: "flex" }}>
              <div className="icon">
                <img
                  src={mobile}
                  alt="Mobile Icon"
                  style={{ margin: "25px 30px" }}
                />
              </div>
              <div style={{ width: "100%" }}>
                <h3
                  className="txt-tl"
                  style={{
                    width: "295.75px",
                    height: "32.4px",
                    color: "#333333",
                    fontSize: "24px",
                    fontFamily: "Lato, sans-serif",
                    margin: "20px 20px 10px",
                  }}
                >
                  Responsive Design
                </h3>
                <p
                  className="txt-para"
                  style={{
                    width: "295.75px",
                    height: "42px",
                    color: "#888888",
                    fontSize: "14px",
                    fontFamily: "Open Sans, sans-serif",
                    margin: "10px 0px 10px",
                  }}
                >
                  반응형 디자인 정말 중요한데 여기는 템플릿이라 자동으로
                  적용되어 있겠네요
                </p>
              </div>
            </div>

            <div className="icon-text" style={{ display: "flex" }}>
              <div className="icon">
                <img
                  src={lightbulb}
                  alt="Lightbulb Icon"
                  style={{ margin: "25px 30px" }}
                />
              </div>
              <div style={{ width: "100%" }}>
                <h3
                  className="txt-tl"
                  style={{
                    width: "295.75px",
                    height: "32.4px",
                    color: "#333333",
                    fontSize: "24px",
                    fontFamily: "Lato, sans-serif",
                    margin: "20px 20px 10px",
                  }}
                >
                  High Conversion
                </h3>
                <p
                  className="txt-para"
                  style={{
                    width: "295.75px",
                    height: "42px",
                    color: "#888888",
                    fontSize: "14px",
                    fontFamily: "Open Sans, sans-serif",
                    margin: "10px 0px 10px",
                  }}
                >
                  로렘입숨이 엄청 많이 있었네요
                </p>
              </div>
            </div>

            <div className="icon-text" style={{ display: "flex" }}>
              <div className="icon">
                <img
                  src={clock}
                  alt="Clock Icon"
                  style={{ margin: "25px 30px" }}
                />
              </div>
              <div style={{ width: "100%" }}>
                <h3
                  className="txt-tl"
                  style={{
                    width: "295.75px",
                    height: "32.4px",
                    color: "#333333",
                    fontSize: "24px",
                    fontFamily: "Lato, sans-serif",
                    margin: "20px 20px 10px",
                  }}
                >
                  Save Tons of Time
                </h3>
                <p
                  className="txt-para"
                  style={{
                    width: "295.75px",
                    height: "42px",
                    color: "#888888",
                    fontSize: "14px",
                    fontFamily: "Open Sans, sans-serif",
                    margin: "10px 0px 10px",
                  }}
                >
                  여러분의 소중한 시간을 위해 지루한 부분은 깔끔히
                  편집하겠습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
