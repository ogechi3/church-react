import React from "react";

import Admonision from "./Admonision";
import Navbar from "./components/Navbar/Navbar";
import About from "./About";
import Header from "./Header";
import Slider from "./components/Slider/Slider";
import District from "./District";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      {/* <Header />

      <Admonision />
      <About />
      <District /> */}
    </div>
  );
};

export default App;
