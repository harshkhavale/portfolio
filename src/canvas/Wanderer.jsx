import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import Loader from "../components/Loader";
const Wanderers = ({isMobile}) => {
  const Wanderer = useGLTF("./wanderers/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={3} groundColor={"black"} />
      <pointLight intensity={2.5}   />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapsize={1024}
      />
      <primitive
        object={Wanderer.scene}
        scale={isMobile?1:1}
        position={isMobile?[0,-2,-2.2]:[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};
const WandererCanvas = () => {


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
  },[isMobile]);


  
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov:isMobile?28: 22 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
        autoRotate
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableZoom={false}
        />
        <Wanderers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default WandererCanvas;
