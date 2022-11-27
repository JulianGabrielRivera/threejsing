import { PointMaterial } from "@react-three/drei";
import modelPath from "../assets/circle.png";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState, useMemo } from "react";
import { Text } from "@react-three/drei";
const Particles = () => {
  const rainDrop = useLoader(TextureLoader, modelPath);

  const particlesCount = 1000;

  const posArray = new Float32Array(particlesCount * 3);
  //   xyz xyz xyz, diff vertices.
  useFrame((state, delta) => (ref.current.rotation.y += 0.02));
  const ref = useRef();
  let mouseX = 0;
  let mouseY = 0;
  const [hovered, setHovered] = useState(mouseX);

  console.log(mouseX);
  const onMouseOver = (event) => {
    // mouseY = event.clientY;
    // mouseX = event.clientX;
    console.log(event);
    console.log("hey");
  };
  console.log(onMouseOver());
  console.log(mouseX);
  console.log(mouseY);

  for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 5;
  }
  const handleMouseEnter = () => {
    console.log("mouse entered");
  };
  const rect = document.body.getBoundingClientRect();
  console.log(rect);
  mouseX = rect.right;
  mouseY = rect.top;
  useMemo((e) => {
    console.log(e);

    document.body.addEventListener("mouseover", console.log("yo"));
  }, []);

  return (
    <group
      onMouseHover={(e) => {
        // onMouseOver();
        console.log(e);
        handleMouseEnter();
        // console.log(e);
        // ref.current.rotation.y += 0.01;
      }}
    >
      <mesh
        ref={ref}
        onPointerOver={() => {
          ref.current.rotation.x += mouseX * 0.000003;
          //   ref.current.rotation.y += mouseY * 0.000003;
        }}
      >
        <points>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              array={posArray}
              count={posArray.length / 3}
              itemSize={3}
            />
          </bufferGeometry>

          <PointMaterial
            attach="material"
            size={0.05}
            color={"blue"}
            transparent={true}
            map={rainDrop}
            alphaTest={0.5} //merupakan thresshold saat rendering untuk mencega bila opacity dibawah value alphatest
            opacity={0.8}
            scale={4}
            //   sizeAttenuation={true}
          ></PointMaterial>
        </points>
        <Text>Googie</Text>
      </mesh>
    </group>
  );
};
export default Particles;
