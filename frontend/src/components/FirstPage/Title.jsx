import React from "react";

const Title = () => {
  return (
    <div
      className="font-[league-gothic] w-full h-[45vw] text-transparent flex justify-center items-center text-center font-extrabold text-[10vw] leading-36 bg-clip-text"
      style={{
        backgroundImage: `
      linear-gradient(
        90deg,
        #ff7a00 0%,
        #ff5a1f 15%,
        #ff4b4b 35%,
        #ff4f87 55%,
        #d93bb8 75%,
        #8e2de2 100%
      )
    `,
      }}
    >
      VOICES
      <br />
      UNITED
    </div>
  );
};

export default Title;
