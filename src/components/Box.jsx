import React from "react";
import { BoxBufferGeometry, MeshStandardMaterial } from "three";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import texture from "../assets/vikingsFire.jpg";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import { CubeTextureLoader } from "three";
import { useCubeTexture } from "@react-three/drei";
import { CubeCamera } from "@react-three/drei";
import { Text3D, Text } from "@react-three/drei";
import { RenderTexture } from "@react-three/drei";
import boldUrl from "../fonts/firstFont.txt";

const Box = () => {
  const profilePic = useLoader(TextureLoader, texture);
  // useFrame((state, delta) => (ref.current.rotation.x += 0.01));
  useFrame((state, delta) => (ref.current.rotation.y += 0.02));
  useFrame((state, delta) => (ref2.current.rotation.x += 0.05));
  useFrame((state, delta) => (ref2.current.rotation.y += 0.05));

  const ref = useRef();
  const ref2 = useRef();
  const textRef = useRef();
  useFrame(
    (state) =>
      (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 4)
  );
  // mesh is a class that represents polygon mesh objects, consists of geometry and the material
  return (
    <>
      <mesh rotation={[0, 0, 0]} ref={ref} color="purple">
        <boxGeometry />
        <meshStandardMaterial>
          <RenderTexture attach="map" anisotropy={16}>
            {/* <PerspectiveCamera
              makeDefault
              manual
              aspect={1 / 1}
              position={[0, 0, 5]}
            /> */}
            <color attach="background" args={["white"]} />

            <ambientLight intensity={0.2} />
            <directionalLight position={[10, 10, 5]} />
            <Text3D font={boldUrl} ref={textRef} color="white" fontSize={1}>
              React
            </Text3D>
          </RenderTexture>
        </meshStandardMaterial>
        <mesh
          rotation={[30, 30, 0]}
          ref={ref2}
          position={[1.5, -0.2, 0.5]}
          scale={0.2}
        >
          <boxGeometry attach="geometry" />
          <meshStandardMaterial>
            <RenderTexture attach="map" anisotropy={16}>
              {/* <PerspectiveCamera
              makeDefault
              manual
              aspect={1 / 1}
              position={[0, 0, 5]}
            /> */}

              <ambientLight intensity={0.2} />
              <directionalLight position={[10, 10, 5]} />
              <Text color="white" fontSize={1}>
                Handlebars
              </Text>
            </RenderTexture>
          </meshStandardMaterial>
        </mesh>
      </mesh>
    </>
  );
};

export default Box;
