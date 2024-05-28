import React from "react";
import Header from "./components/Header";
import Feature from "./components/Feature";
import SubscribeNow from "./components/SubscribeNow";
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
      <SubscribeNow />
      <Portfolio />
    </div>
  );
};

export default App;
