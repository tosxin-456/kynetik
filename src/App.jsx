import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import Building from "./components/Building";
import LetterSection from "./components/Letter";
import MovingSections from "./components/MovingSections";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <HeroSection />
      <LetterSection />
      <Building />
      <MovingSections />
    </>
  );
}

export default App;
