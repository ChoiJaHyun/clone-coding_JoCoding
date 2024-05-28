import bground from "/images/cta-banner.jpg";

const Background = () => {
  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(${bground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    ></div>
  );
};

export default Background;
