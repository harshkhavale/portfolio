import React, { useEffect } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Creative = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Create a timeline
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".section",
        
        scrub: 1,
        
        
      },
    }); 

    // Add animations to the timeline
    timeline.to(".creative", {
      
      x: 200,
      duration: 2,
      ease: "power1.inOut",
    },"-=3");

    timeline.to(".developer", {
      x: -200,
      duration: 2,
      ease: "power1.inOut",
    },"-=3");
    timeline.to(".inspire", {
      x: 100,
      duration: 2,
      ease: "power1.inOut",
    },"-=3");
    timeline.to(".abstract", {
      x: -100,
      duration: 2,
      ease: "power1.inOut",
    },"-=3");

    timeline.to(".last", {
        x: 200,
        duration: 2,
        ease: "power1.inOut",
      },"-=3");
    
    // Offset the developer animation by 3 seconds to make them happen simultaneously
  }, []);

  return (
    <div>
      <div className="section">
        <p
          className="creative text-[6rem] md:text-[15rem] "
          style={{
            fontFamily: "Belgan",
          }}
        >
          CREATIVE
        </p>
        <p
          className="developer text-center text-[4rem] md:text-[10rem] -mt-10 md:-mt-32"
          style={{
            fontFamily: "Belgan",
            fontStyle: "italic",
          }}
        >
          developer
        </p>
        <p
          className="inspire text-[1.5rem] md:text-[5rem] md:-mt-16"
          style={{
            fontFamily: "Belgan",
            fontStyle: "italic",
          }}
        >
          inspired by the
        </p>
        <p
          className="abstract -mb-10 text-center text-[4rem] md:text-[12rem] ms-72 md:-my-20"
          style={{
            fontFamily: "Belgan",
          }}
        >
          ABSTRACTION
        </p>
        <div className="last my-6 md:-my-20 flex flex-col -ms-72">
          <p
            className="text-[2rem] md:text-[3rem] text-center"
            style={{
              fontFamily: "Belgan",
              fontStyle: "italic",
            }}
          >
            of
          </p>
          <p
            className="-mt-6 md:-mt-28 text-[7rem] md:text-[20rem] creative"
            style={{
              fontFamily: "Belgan",
              fontStyle: "italic",
            }}
          >
            NATURE
          </p>
        </div>
      </div>
    </div>
  );
};

export default Creative;
