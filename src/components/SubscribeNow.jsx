import bground from "/images/cta-banner.jpg";

const SubscribeNow = () => {
  return (
    <section
      id="cta-2"
      className="section-padding parallax bg-image-2 section wow fadeIn delay-08s animated"
      style={{
        visibility: "visible",
        animationName: "fadeIn",
        width: "100%",
        height: "251.2px",
        color: "#333333",
        fontFamily: "Open Sans, sans-serif",
        fontSize: "14px",
        padding: "88px 0px 67px",
        backgroundImage: `url(${bground})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="row">
          <div
            className="col-md-8"
            style={{
              width: "779.99px",
              height: "96.2px",
              color: "#333333",
              fontFamily: "Open Sans, sans-serif",
              fontSize: "14px",
              padding: "0px 15px",
            }}
          >
            <div className="cta-txt">
              <h3
                style={{
                  width: "749.99px",
                  height: "35.2px",
                  color: "#FFFFFF",
                  fontSize: "32px",
                  fontFamily: "Lato, sans-serif",
                  fontSize: "bold",
                  margin: "20px 0px 10px",
                }}
              >
                Subscribe For Updates
              </h3>
              <p
                style={{
                  width: "749.99px",
                  height: "21px",
                  color: "#FFFFFF",
                  fontSize: "14px",
                  fontFamily: "Open Sans, sans-serif",
                  margin: "0px 0px 10px",
                }}
              >
                구독자 1000명 돌파하였는데 정말 감사드립니다. 더
                열심히하겠습니다!
              </p>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <a
              href="#"
              className="btn btn-submit"
              style={{
                width: "223.63px",
                height: "46.85px",
                color: "#333333",
                fontSize: "16px",
                fontFamily: "Open Sans, sans-serif",
                backgroundColor: "#FFD34E",
                margin: "25px 0px 0px",
                padding: "10px 40px",
              }}
            >
              Subscribe Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeNow;
