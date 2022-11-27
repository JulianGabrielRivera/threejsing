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
import { PointMaterial, Points } from "@react-three/drei";
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
    <div className="App">
      <nav>
        <li>Home</li>
        <li>About </li>
      </nav>

      <Canvas className="canvas">
        {/* <Sky
          distance={450000}
          sunPosition={[0, 1, 0]}
          inclination={0}
          azimuth={0.25}
        /> */}
        <Sparkles
          /** Number of particles (default: 100) */
          count={1000}
          scale={5}
          speed={2}

          // rotation={[100, 80, 30]}
          /** Speed of particles (default: 1) */
          // speed?: number | Float32Array
          // /** Opacity of particles (default: 1) */
          // opacity?: number | Float32Array
          // /** Color of particles (default: 100) */
          // color?: THREE.ColorRepresentation | Float32Array
          // /** Size of particles (default: randomized between 0 and 1) */
          // size?: number | Float32Array
          // /** The space the particles occupy (default: 1) */
          // scale?: number | [number, number, number] | THREE.Vector3
          // /** Movement factor (default: 1) */
          // noise?: number | [number, number, number] | THREE.Vector3 | Float32Array
        />

        <Cloud
          opacity={0.5}
          speed={0.8} // Rotation speed
          width={10} // Width of the full cloud
          depth={5} // Z-dir depth
          segments={20} // Number of particles
        />
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />

        {/* enables controls on the shape */}
        {/* <OrbitControls /> */}
        <PresentationControls
          enabled={true} // the controls can be disabled by setting this to false
          global={false} // Spin globally or by dragging the model
          cursor={true} // Whether to toggle cursor style on drag
          snap={true} // Snap-back to center (can also be a spring config)
          speed={1} // Speed factor
          zoom={3} // Zoom factor when half the polar-max is reached
          rotation={[0, 0, 0]} // Default rotation
          polar={[0, Math.PI / 2]} // Vertical limits
          azimuth={[-Infinity, Infinity]} // Horizontal limits
          config={{ mass: 1, tension: 170, friction: 90 }} // Spring config
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={(-2, 5, 2)} intensity={1} />
          <Box></Box>
        </PresentationControls>
      </Canvas>
      {/* <div className="skills">
        <Canvas className="canvas">
          <OrbitControls enableZoom={false} />

          <Text3D font={boldUrl} scale={1.5}>
            HTML
            <meshNormalMaterial color="black" />
          </Text3D>
        </Canvas>
        <Canvas className="canvas">
          <OrbitControls enableZoom={false} />
          <Text3D font={boldUrl} scale={1.5}>
            CSS
            <meshStandardMaterial color="black" />
          </Text3D>
        </Canvas>
      </div> */}
      {/* <div style={{ display: "flex" }}>
        <Canvas shadows camera={{ position: [1, 1.5, 2.5], fov: 40 }}>
          <AnimatedSphere name={"html"} />
        </Canvas>
        <Canvas>
          <AnimatedSphere name={"yo"} />
        </Canvas>
      </div> */}
      <Canvas style={{ background: "black" }}>
        <Suspense fallback={null}>
          {/* <OrbitControls /> */}
          <Testing />
        </Suspense>
      </Canvas>
      <Canvas style={{ background: "black" }}>
        <Particles />
      </Canvas>
    </div>
  );
}

export default App;
