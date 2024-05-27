import React from "react";
import Header from "./components/Header";
import Feature from "./components/Feature";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CtaInfo from "./components/CtaInfo";

const App = () => {
  return (
    <div>
      <Header />
      <CtaInfo />
      <Feature />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
