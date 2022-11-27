import React, { Suspense, useMemo, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import modelPath from "../assets/circle.png";
import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";
import { PointMaterial, Points, Text, RenderTexture } from "@react-three/drei";
import { Plane } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
export default function Testing() {
  const rainDrop = useLoader(TextureLoader, modelPath);
  useFrame((state, delta) => (ref.current.rotation.y += 0.02));

  const ref = useRef();
  //   count is number of points across one axis
  //   const count = 100;
  //   //   separation/distance between each point
  //   const sep = 3;
  //   let positions = useMemo(() => {
  //     // each item or point has 3 values
  //     let positions = [];

  //     for (let xi = 0; xi < count; xi++) {
  //       for (let zi = 0; zi < count; zi++) {
  //         let x = sep * (xi - count / 2);
  //         let z = sep * (zi - count / 2);
  //         let y = 0;
  //         positions.push(x, y, z);
  //       }
  //     }
  //     return new Float32Array(positions);
  //   }, [count, sep]);
  return (
    <mesh>
      <points rotation={[30, 30, 0]} ref={ref}>
        {/* <Plane attach="geometry">
        <bufferAttribute
          attachObject={["attributes", "position"]}
          array={positions}
          //   each position will take 3 spaces
          count={positions.length / 3}
          itemSize={3}
        />
      </Plane> */}

        <sphereGeometry />
        <PointMaterial
          attach="material"
          map={rainDrop}
          //   array={positions}
          //   attachObject={["attributes", "position"]}
          color={"white"}
          sizeAttenuation
          transparent={true}
          alphaTest={0.5}
          opacity={1.0}
          size={0.02}
          //   count={positions.length / 3}
          itemSize={2}
          //   depthWrite={false}
        >
          {/* <RenderTexture attach="map" anisotropy={16}>
            <Text color="white" fontSize={1}>
              Handlebars
            </Text>
          </RenderTexture> */}
        </PointMaterial>
      </points>
    </mesh>
  );
}
