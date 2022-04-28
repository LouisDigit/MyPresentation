import React from "react";
import Competences from "./pages/Competences";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import LandingPage from "./pages/LandingPage";
import Me from "./pages/Me";
import Portfolio from "./pages/Portfolio";
import Error from "./pages/Error";

const App = () => {
  return (
    <>
      <LandingPage />
      <Me />
      <Competences />
      <Portfolio />
      <Contact />
      <Footer />
      <Error />
    </>
  );
};

export default App;
