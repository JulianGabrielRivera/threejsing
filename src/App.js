import logo from "./logo.svg";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Box from "./components/Box";
import { OrbitControls } from "@react-three/drei";
import AnimatedSphere from "./components/AnimatedSphere";
import { Text } from "@react-three/drei";
import { Suspense, useRef, useState } from "react";
import { Sky, Sparkles, Cloud, Stars } from "@react-three/drei";
import boldUrl from "./fonts/firstFont.txt";
// import { useFrame } from "@react-three/fiber";
import { PresentationControls } from "@react-three/drei";
import { RenderTexture } from "@react-three/drei";
import Testing from "./components/Testing";
import { Text3D } from "@react-three/drei";
import { PointMaterial, Points, Center } from "@react-three/drei";
import texture from "./assets/vikingsFire.jpg";
import { useLoader, useThree } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import Particles from "./components/Particles";
import { useFrame } from "@react-three/fiber";
import { gsap, Power3 } from "gsap";
import Image from "./components/Image";

function Resizer() {
  const { size } = useThree();
}
function App() {
  const profilePic = useLoader(TextureLoader, texture);
  const onMouseOver = (e) => {};
  const handleMouseEnter = (e) => {
    console.log("mouse entered");
  };
  const height = window.outerHeight + window.innerHeight;
  const [cam, setCam] = useState(false);
  // useFrame((state, delta) => (ref.current.rotation.y += 0.02));
  const ref = useRef();
  return (
    <div>
      <div
        style={{ width: "100vw", height: height, display: "relative" }}
        onClick={() => {
          setCam(!cam);
        }}
      >
        <nav>
          <li>Home</li>
          <li>Projects</li>
          <li>About</li>
        </nav>
        <h1>Julian Gabriel Rivera</h1>
        {cam && (
          <Canvas
            // className="canvas"
            camera={{ fov: 60, far: 100 }}
            style={{ height: height, background: "black" }}
          >
            <Resizer />
            <Particles />

            {/* <Testing /> */}
            {/* <Box color="pink" metalness={0} /> */}
            {/* <Text scale={0.5}>React</Text>
            <Center top left>
              <Text scale={0.5}>CSS</Text>
            </Center> */}
          </Canvas>
        )}

        <Canvas
          className={cam ? "canvas2" : "canvas"}
          camera={{ fov: 165, far: 100 }}
        >
          <Resizer />
          <Particles />

          {/* <Testing /> */}
          {/* <Box color="pink" metalness={0} /> */}
          {/* <Text scale={0.5}>React</Text>
          <Center top left>
            <Text scale={0.5}>CSS</Text>
          </Center> */}
        </Canvas>
        <Image />
      </div>
      {/* <div>
        <Image />
      </div> */}
    </div>
  );
}

export default App;
