import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
// import texture from "../assets/propic.jpg";
// import { FontLoader } from "three/src/loaders/FontLoader";
// import {Text}
import boldUrl from "../fonts/firstFont.txt";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

import { Text3D } from "@react-three/drei";

import {
  Sphere,
  MeshDistortMaterial,
  MeshWobbleMaterial,
} from "@react-three/drei";

const AnimatedSphere = (props) => {
  // const profilePic = useLoader(TextureLoader, texture);
  useFrame((state, delta) => (ref.current.rotation.y += 0.01));
  const ref = useRef();

  return (
    <>
      {/* <Sphere visible args={[1, 1000, 1000]} scale={3}>
        <MeshDistortMaterial
          color="#8352FD"
          attach="material"
          distort={0.3}
          speed={1.6}
          map={profilePic}
        />
      </Sphere> */}
      <ambientLight />

      <directionalLight
        position={[-5, 5, 5]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      <mesh ref={ref}>
        <Text3D font={boldUrl} scale={1} className="font">
          {props.name}
          <meshStandardMaterial color="white" />
        </Text3D>
      </mesh>
    </>
  );
};

export default AnimatedSphere;
