import React from 'react';
import { Html, useProgress } from '@react-three/drei';

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <div className="container">
        <div id="loader" className="flex flex-col items-center w-80 opacity-0 animate-opcty">
          <div className="flex">
            <p className="loading-text font-orbitron text-white">LOADING</p>
            <div className="therefore text-white text-3xl animate-rotate"></div>
            <p className="loading-number font-orbitron text-white counter-reset-num ml-auto animate-counting">
              {progress.toFixed(2)}
            </p>
          </div>
          <div id="loading-bar-border" className="flex items-center w-full mt-1">
            <div className="loading-bar h-1.5 bg-white animate-charging"></div>
          </div>
          <div id="warning" className="mt-1 font-orbitron flex">
            <div className="exclamation w-4 h-4 bg-white text-black flex justify-center items-center rounded-full">
              !
            </div>
            <p className="text-white ml-2">
              CAUTION, Do not turn off.
            </p>
          </div>
          <div id="line-cascates" className="ml-auto flex items-end mt-5">
            <div className="text-xs text-gray-400 after:content-[''] after:h-20 after:font-size-12 after:inline-block animate-initText"></div>
          </div>
        </div>
      </div>
    </Html>
  );
};

export default Loader;
