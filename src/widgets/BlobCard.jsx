import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const BlobCard = () => {
  useEffect(() => {
    const rnd = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

    const colors = ["#BF547B", "#AC79F2", "#9196F2", "#B6C5F2", "#F2D0BD"];

    const rndBorderRadius = () =>
      [...Array(4).keys()].map((x) => rnd(30, 85) + "%").join(" ") +
      " / " +
      [...Array(4).keys()].map((x) => rnd(30, 85) + "%").join(" ");

    const createBlob = ({ id, x, y, color }) => {
      const card = document.querySelector(".blobcard");
      const blob = document.createElement("div");
      blob.id = `blob-${id}`;
      blob.classList.add("blob");
      blob.style.top = `${y}%`;
      blob.style.left = `${x}%`;
      blob.style.backgroundColor = color;
      blob.style.scale = rnd(1.25, 2);
      blob.style.borderRadius = rndBorderRadius();
      card.appendChild(blob);
      animateBlob(id);
    };

    const animateBlob = (id) => {
      gsap.to(`#blob-${id}`, {
        x: `+=${rnd(-25, 25)}`,
        y: `+=${rnd(-25, 25)}`,
        borderRadius: rndBorderRadius(),
        rotation: rnd(-25, 25),
        opacity: rnd(0.4, 0.8),
        delay: rnd(0, 1),
        scale: rnd(1.25, 2),
        duration: 4, // Adjusted duration for smoother animations
        ease: "power2.easeInOut", // Use any easing function of your choice
        onComplete: () => animateBlob(id)
      });
    };

    const genBlobs = () => {
      const card = document.querySelector(".blobcard");
      card.innerHTML = "";
      [...Array(25).keys()].map((id) => {
        const x = rnd(25, 75);
        const y = rnd(25, 75);
        const color = colors[rnd(0, colors.length)];
        createBlob({ x, y, color, id });
      });
    };

    genBlobs();
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="container w-screen h-screen">
        <div className="blobcard relative w-full h-full bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Blobs will be dynamically generated here */}
        </div>
      </div>
    </div>
  );
};

export default BlobCard;
