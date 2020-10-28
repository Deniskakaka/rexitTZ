import React from "react";
import Header from "../header/Header";
import Taste from "../main/taste/Taste";
import Cracker from "../main/cracker/Cracker";
import Footer from "../footer/Footer";
import "./app.scss";

const App = () => {
  return (
    <>
      <Header></Header>
      <Taste></Taste>
      <Cracker></Cracker>
      <Footer></Footer>
    </>
  );
};

export default App;
