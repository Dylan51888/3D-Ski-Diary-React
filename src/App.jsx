import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Suspense } from "react";
import { Experience } from "./components/Experience";
import { UI } from "./components/UI";

function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [0, 5, 20], fov: 42 }}>
        <color attach="background" args={["#87CEEB"]} />{" "}
        {/* 浅蓝色到深蓝色渐变 */}
        <fog attach="fog" args={["#87CEEB", 10, 30]} />{" "}
        {/* 使用柔和的蓝色雾气 */}
        <ambientLight intensity={0.5} /> {/* 增加环境光，让场景更亮 */}
        <Suspense>
          <Experience />
        </Suspense>
        <EffectComposer>
          <Bloom mipmapBlur intensity={1.2} />
        </EffectComposer>
      </Canvas>
      <UI />
    </>
  );
}

export default App;
