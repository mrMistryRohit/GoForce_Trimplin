import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Sec2 from "../components/Sec2";
import Sec3 from "../components/Sec3";
import Sec4 from "../components/Sec4";
import Sec5 from "../components/Sec5";
import Sec8 from "../components/Sec8";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sec2 />
      <Sec3 />
      <Sec4 />
      <Sec5 />
      <Sec8 />
      {/* Add other sections here */}
    </>
  );
}

export default Home;
