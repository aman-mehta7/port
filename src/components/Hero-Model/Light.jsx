import React from 'react'

const Light = () => {
  return (
    <>
      <ambientLight intensity={0.5} color="red" />
      <directionalLight
        intensity={7}
        color="purple"
        position={[5, 3, 5]}
        angle={5}
      />
      <directionalLight
        intensity={2}
        color="black"
        position={[-5, 3, 5]}
        angle={5}
      />
      <spotLight
        intensity={0.2}
        color="purple"
        position={[0, 4, 2]}
        power={300}
      />
      <spotLight
        intensity={0.2}
        color="yellow"
        position={[0, 4, 2]}
        power={100}
        p
      />
    </>
  );
}

export default Light