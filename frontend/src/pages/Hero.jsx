import React from "react";
import Navbar from "../components/FirstPage/Navbar";
import Title from "../components/FirstPage/Title";

const Hero = () => {
  return (
    <div className="h-screen w-full"
    style={{
        background: `
          radial-gradient(circle at 0% 55%, rgba(255,60,0,0.95) 0%, rgba(255,60,0,0.45) 22%, transparent 45%),
          radial-gradient(circle at 100% 55%, rgba(255,0,255,0.75) 0%, rgba(180,0,255,0.45) 18%, transparent 40%),
          radial-gradient(circle at 100% 35%, rgba(120,80,255,0.4) 0%, transparent 25%),
          #020013
        `,
      }}>
        <Navbar />
        <Title />
    </div>
  );
};

export default Hero;
