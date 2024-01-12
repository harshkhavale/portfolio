import React, { useState, useEffect } from 'react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import Loader from '../components/Loader';
import { DirectionalLight } from 'three';

const Robot = () => {
  const [time, setTime] = useState(0);
  const { scene } = useGLTF('../cyberpunk_speeder/scene.gltf');

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update time for the floating effect
      setTime((prevTime) => prevTime + 0.01);
    }, 16);

    return () => clearInterval(intervalId);
  }, []);

  // Use Math.sin to create a floating effect
  const positionY = Math.sin(time) * -0.2;

  return (
    <>
      <primitive object={scene} scale={3} position-y={positionY-0.7} position-x={0} rotation-y={0} />
      {/* Add a directional light */}
      <directionalLight intensity={3} position={[5, 5, 5]} />
    </>
  );
};

const RobotCanvas = () => {
  return (
    <Canvas shadows frameloop="demand" gl={{ preserveDrawingBuffer: true }} camera={{ fov: 15, near: 0.1, far: 150, position: [-4, 15, 12] }}>
      <Suspense fallback={<Loader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Robot />
      </Suspense>
    </Canvas>
  );
};

export default RobotCanvas;
