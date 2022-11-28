import logo from "./logo.svg";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Box from "./components/Box";
import { OrbitControls } from "@react-three/drei";
import AnimatedSphere from "./components/AnimatedSphere";
import { Text } from "@react-three/drei";
import { Suspense, useRef } from "react";
import { Sky, Sparkles, Cloud, Stars } from "@react-three/drei";
import boldUrl from "./fonts/firstFont.txt";
// import { useFrame } from "@react-three/fiber";
import { PresentationControls } from "@react-three/drei";
import { RenderTexture } from "@react-three/drei";
import Testing from "./components/Testing";
import { Text3D } from "@react-three/drei";
import { PointMaterial, Points, Center } from "@react-three/drei";
import texture from "./assets/vikingsFire.jpg";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import Particles from "./components/Particles";
import { useFrame } from "@react-three/fiber";
function App() {
  const profilePic = useLoader(TextureLoader, texture);
  const onMouseOver = (e) => {};
  const handleMouseEnter = (e) => {
    console.log("mouse entered");
  };
  // useFrame((state, delta) => (ref.current.rotation.y += 0.02));
  const ref = useRef();
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <nav>
        <li>About</li>
      </nav>
      <Canvas className="canvas" camera={{ fov: 35, far: 100 }}>
        <Particles />
        {/* <Testing /> */}
        {/* <Box color="pink" metalness={0} /> */}
        <Text scale={0.5}>React</Text>
        <Center top left>
          <Text scale={0.5}>CSS</Text>
        </Center>
      </Canvas>
    </div>
  );
}

export default App;
