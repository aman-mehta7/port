import { Float, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { useEffect } from 'react'
import * as THREE from "three";

const TechIconExperience = ({ model }) => {
    const scene = useGLTF(model.modelPath);
    useEffect(() => {
      if(model.name === "Interactive Developer") {
              scene.scene.traverse((child) => {
                if(child.isMesh){
                  if(child.name === "Object_5"){
                    child.material = new THREE.MeshStandardMaterial({ color : "white" })
                  }
                }
              });
            }
    }, [scene]);
    
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={2} />
      <OrbitControls enableZoom={false} />

      <Float rotationIntensity={3} floatIntensity={1}>
        <group>
          <mesh scale={model.scale} rotation={model.rotation}>
            <primitive object={scene.scene} />
          </mesh>
        </group>
      </Float>
    </Canvas>
  );
}

export default TechIconExperience