import React, { Suspense, useEffect, useState, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import Loader from "../components/Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./continental/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={50} position={[45, -35, 5]} groundColor={"white"} />
      <pointLight position={[45, -35, 5]} intensity={10} />
      <spotLight
        position={[45, -30, 5]}
        angle={0.12}
        penumbra={1}
        intensity={10}
        castShadow
        shadow-mapsize={1024}
      />
      <primitive object={computer.scene} scale={10} position-y={-8} rotation-y={0} />
    </mesh>
  );
};

const OptimizedComputers = React.memo(Computers);

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, [isMobile]);

  return (
    <Canvas frameloop="demand" shadows camera={{ position: [45, -30, 5], fov: isMobile ? 28 : 20 }}>
      <Suspense fallback={<Loader />}>
        <OrbitControls autoRotate={true} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} enableZoom={false} />
        <OptimizedComputers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
