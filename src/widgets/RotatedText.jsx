import React, { useEffect } from "react";

const RotatedText = ({ title, subtitle, link }) => {
  useEffect(() => {
    const textElement = document.querySelector(".text");
    textElement.innerHTML = textElement.innerText
      .split("")
      .map(
        (char, i) =>
          `<span style="transform:rotate(${i * 10.3}deg)">${char}</span>`
      )
      .join("");
  }, []);

  return (
    <div className="circle ">
      <div className="font-bold text-3xl">{title}</div>
      <div className="text">
        <p className="text-3xl font-bold" style={{ fontFamily: "Belgan" }}>
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default RotatedText;
