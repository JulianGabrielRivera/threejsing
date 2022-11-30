import { PointMaterial } from "@react-three/drei";
import modelPath from "../assets/circle.png";
import { useLoader } from "@react-three/fiber";
import { Clock, TextureLoader } from "three";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState, useMemo } from "react";
import { Text, Center, OrbitControls, Cloud } from "@react-three/drei";

const Particles = () => {
  const rainDrop = useLoader(TextureLoader, modelPath);

  const particlesCount = 2500;

  const posArray = new Float32Array(particlesCount * 3);
  //   xyz xyz xyz, diff vertices.

  useMemo(() => {
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5;
    }
  }, [particlesCount, posArray]);
  useFrame((state, delta) => {
    ref.current.rotation.y += 0.005;
    ref.current.rotation.x -= 0.005;
  });
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
    // <group
    //   onMouseHover={(e) => {
    //     // onMouseOver();
    //     console.log(e);
    //     handleMouseEnter();
    //     // console.log(e);
    //     // ref.current.rotation.y += 0.01;
    //   }}
    //   style={{ width: "100vw" }}
    // >
    <mesh
      ref={ref}
      onPointerOver={() => {
        ref.current.rotation.y -= mouseY * 0.0000009;

        ref.current.rotation.x -= mouseX * 0.0000009;
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
          size={0.01}
          color={"white"}
          transparent={false}
          map={rainDrop}
          alphaTest={0.5} //merupakan thresshold saat rendering untuk mencega bila opacity dibawah value alphatest
          opacity={1.0}
          scale={4}
          // sizeAttenuation={true}
        ></PointMaterial>
      </points>
    </mesh>
    // </group>
  );
};
export default Particles;
