import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import Room from "./Room";
import Light from "./Light";
import Particles from "./Partical";
// import Gun from "./Gun";

const Model = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      <Light />
      <group position={[0, -10, 0]}>  
        <Particles count={50} />
      </group>
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />
      <Suspense fallback={null}>
        <group
          position={[-0.2, -3, 0]}
          // scale={0.1}
          scale={0.8}
          rotation={[0.1, -Math.PI / 3.5, 0]}
        >
          <Room />
          {/* <Gun /> */}
        </group>
      </Suspense>
    </Canvas>
  );
};

export default Model;
