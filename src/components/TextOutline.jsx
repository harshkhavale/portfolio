import React from "react";

const TextOutline = ({ text }) => {
  return (
    <div>
      <h1
        className="text-outline happy-font text-outline-hover font-black md:text-9xl text-7xl"
        data-text={text}
      >
        {text}
      </h1>
    </div>
  );
};

export default TextOutline;
