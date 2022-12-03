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
  const height = window.screen.availHeight + window.screen.height;
  const [cam, setCam] = useState(false);
  const [cam2, setCam2] = useState(true);
  console.log(window);

  // useFrame((state, delta) => (ref.current.rotation.y += 0.02));
  const ref = useRef();
  const [countDown, setCountDown] = useState(0);
  // const clear = function () {
  //   setInterval(() => {
  //     setCountDown(countDown + 1);
  //   }, 1000);
  // };
  // clear();
  // if (countDown > 9) {
  //   clearInterval(clear);
  //   setCam(!cam);
  // }
  return (
    <div style={{ width: "100vw", height: height, display: "relative" }}>
      <div
        onClick={() => {
          setCam(!cam);
        }}
      >
        {cam && (
          <nav>
            <li>Home</li>
            <li>Projects</li>
            <li>About</li>
          </nav>
        )}

        {/* <h1>Julian Gabriel Rivera</h1> */}

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
        {/* <h1>Julian Gabriel Rivera</h1> */}
        {/* <h3>A Full Stack Web Developer</h3> */}

        <Canvas
          className={cam ? "canvas2" : "canvas"}
          camera={{ fov: 120 }}
          style={{ height: height, background: "black" }}
        >
          <Resizer />
          {/* <Particles /> */}

          <Text fontSize={0.3} color={"white"} position={[-3, 5.5, 1]}>
            Julian Gabriel Rivera
          </Text>

          <Testing />
          <Text fontSize={0.2} position={[3, 1, 1]}>
            A Full Stack Web Developer
          </Text>
          <Text fontSize={0.2} position={[0, 3.1, 1]}>
            Teleport here
          </Text>

          {/* <Box color="pink" metalness={0} /> */}
          {/* <Text scale={0.5}>React</Text>
          <Center top left>
            <Text scale={0.5}>CSS</Text>
          </Center> */}
        </Canvas>
        <Image state={cam} />
      </div>
      {/* <div>
        <Image />
      </div> */}
    </div>
  );
}

export default App;
