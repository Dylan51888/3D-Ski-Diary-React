import {
  CameraControls,
  Environment,
  Float,
  MeshReflectorMaterial,
  RenderTexture,
  Text,
  useFont,
  Html,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useAtom } from "jotai";
import { useEffect, useRef, useState } from "react";
import { Color } from "three";
import { degToRad, lerp } from "three/src/math/MathUtils";
import { Camping } from "./Camping";
import { currentPageAtom } from "./UI";

const bloomColor = new Color("#fff");
bloomColor.multiplyScalar(1.5);

export const Experience = () => {
  const controls = useRef();
  const meshFitCameraHome = useRef();
  const meshFitCameraStore = useRef();
  const textMaterial = useRef();
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
  const [showContent, setShowContent] = useState(false); // 用于控制延迟显示

  useFrame((_, delta) => {
    textMaterial.current.opacity = lerp(
      textMaterial.current.opacity,
      currentPage === "home" || currentPage === "intro" ? 1 : 0,
      delta * 1.5
    );
  });

  const intro = async () => {
    controls.current.dolly(-100);
    controls.current.smoothTime = 1.6;
    setTimeout(() => {
      setCurrentPage("home");
    }, 1200);
    fitCamera();
  };

  const fitCamera = async () => {
    if (currentPage === "store") {
      controls.current.smoothTime = 0.8;
      controls.current.fitToBox(meshFitCameraStore.current, true);

      // 延迟显示内容
      setTimeout(() => {
        setShowContent(true);
      }, 2000); // 延迟3秒
    } else {
      controls.current.smoothTime = 1.6;
      controls.current.fitToBox(meshFitCameraHome.current, true);
      setShowContent(false); // 离开 "store" 页面时隐藏内容
    }
  };

  useEffect(() => {
    intro();
  }, []);

  useEffect(() => {
    fitCamera();
    window.addEventListener("resize", fitCamera);
    return () => window.removeEventListener("resize", fitCamera);
  }, [currentPage]);

  return (
    <>
      <CameraControls ref={controls} />
      <mesh ref={meshFitCameraHome} position-z={1.5} visible={false}>
        <boxGeometry args={[7.5, 2, 2]} />
        <meshBasicMaterial color="orange" transparent opacity={0.5} />
      </mesh>
      <Text
        font={"fonts/Poppins-Black.ttf"}
        position-x={-3.0}
        position-y={0.5}
        position-z={1}
        fontSize={0.5}
        lineHeight={0.8}
        textAlign="center"
        rotation-y={degToRad(30)}
        anchorY={"bottom"}
      >
        Chaoyang’s{"\n"}Ski Diary
        <meshBasicMaterial
          color={bloomColor}
          toneMapped={false}
          ref={textMaterial}
        >
          <RenderTexture attach={"map"}>
            <color attach="background" args={["#87CEEB"]} />
            <Environment preset="sunset" />
            <Float floatIntensity={4} rotationIntensity={5}>
              <Camping
                scale={0.8}
                rotation-y={-degToRad(30)}
                rotation-x={degToRad(0)}
                rotation-z={degToRad(0)}
                position-y={0}
                position-x={0}
              />
            </Float>
          </RenderTexture>
        </meshBasicMaterial>
      </Text>
      <group rotation-y={degToRad(0)} position-x={3}>
        <Camping scale={0.3} html />
        <mesh ref={meshFitCameraStore} position={[2, 1, 2]} visible={false}>
          <boxGeometry args={[2, 1, 2]} />
          <meshBasicMaterial color="red" transparent opacity={0.5} />
        </mesh>
      </group>
      <mesh position-y={-0.48} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[100, 100]} />
        <MeshReflectorMaterial
          blur={[100, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={10}
          roughness={1}
          depthScale={1}
          opacity={0.5}
          transparent
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#333"
          metalness={0.5}
        />
      </mesh>
      <Environment preset="studio" intensity={1.5} />

      {currentPage === "store" && showContent && (
        <Html position={[5.8, 2, 0]}>
          <div
            style={{
              flexDirection: "column",

              color: "black",
            }}
          >
            <img
              src={`${import.meta.env.BASE_URL}images/ski.jpg`}
              alt="Snowman"
              style={{
                width: "400px",
                height: "300px",
                objectFit: "cover",
                maxWidth: "none", // Override Tailwind's max-width
              }}
            />

            <p
              style={{
                fontFamily: "ArtisticFont, sans-serif",
                fontSize: "24px",
                textAlign: "left",
                fontStyle: "italic", // 添加斜体样式
                background: "linear-gradient(90deg, #ff7e5f, #feb47b)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "white",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                animation: "fadeIn 2s ease-in-out",
                lineHeight: "1.5",
              }}
            >
              On July 20th, I went skiing at Fisher Mountain. The snow was
              perfect, and the weather was crisp and clear. I spent the day
              practicing on the slopes, enjoying the fresh air and scenic views.
              It was an unforgettable experience!
            </p>
          </div>
        </Html>
      )}
    </>
  );
};

useFont.preload("fonts/Poppins-Black.ttf");
