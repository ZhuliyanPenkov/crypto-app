import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import AllCoins from "./components/AllCoins";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <AllCoins />
      <Footer />
    </>
  );
}

export default App;
