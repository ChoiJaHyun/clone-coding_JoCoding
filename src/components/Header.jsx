import Navbar from "./Navbar";
import banner from "/images/banner.jpeg";
const Header = () => {
  return (
    <header
      className="main-header"
      id="header"
      style={{
        background: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-color">
        <Navbar />
        <div className="container text-center">
          <div
            className="wrapper wow fadeInUp delay-05s animated"
            style={{
              visibility: "visible",
              animationName: "fadeInUp",
              color: "white",
            }}
          >
            <h2 className="top-title" style={{ color: "white" }}>
              Web Design &amp; Development
            </h2>
            <h3 className="title" style={{ color: "white" }}>
              조코딩 홈페이지
            </h3>
            <h4 className="sub-title" style={{ color: "white" }}>
              We Create amazing designs
            </h4>
            <a href="https://developerdk.tistory.com/">
              <button type="submit" className="btn btn-submit">
                Download Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
