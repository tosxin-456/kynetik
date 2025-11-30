import React from "react";
import HeroSection from "../components/Hero";
import LetterSection from "../components/Letter";
import Building from "../components/Building";
import MovingSections from "../components/MovingSections";
import ZeroSection from "../components/ZeroSection";
import Future from "../components/Future";

function Home() {
  return (
    <>
      <HeroSection />
      <LetterSection />
      <Building />
      <MovingSections />
      <ZeroSection />
      <Future />
    </>
  );
}

export default Home;
