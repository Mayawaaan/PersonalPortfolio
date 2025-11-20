import React, { useMemo, useRef, useState } from 'react';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';
import { MeshStandardMaterial, TextureLoader, RepeatWrapping } from 'three';
import face1 from '../assets/textures/face1.jpg';
import face2 from '../assets/textures/face2.jpg';
import face3 from '../assets/textures/face3.jpg';
import face4 from '../assets/textures/face4.jpg';
import face5 from '../assets/textures/face5.jpg';
import face6 from '../assets/textures/face6.jpg';
// Import your sphere textures - replace with your actual file names
import sphereTexture1 from '../assets/sphereTextures/sFace1.png';
import sphereTexture2 from '../assets/sphereTextures/sFace2.png';
import sphereTexture3 from '../assets/sphereTextures/sFace3.png';
// Import your background image - replace with your actual file name
import backgroundImage from '../assets/canvasBg.png';


const SpinningMesh = () => {
  const meshRef = useRef();
  const [isCube, setIsCube] = useState(true);
  const cubeTextures = useLoader(TextureLoader, [
    face1,
    face2,
    face3,
    face4,
    face5,
    face6,
  ]);

  const sphereTextures = useLoader(TextureLoader, [
    sphereTexture1,
    sphereTexture2,
    sphereTexture3,
  ]);

  const cubeMaterials = useMemo(() => 
    cubeTextures.map(texture => new MeshStandardMaterial({ map: texture })), 
    [cubeTextures]
  );

  const sphereMaterials = useMemo(() =>
    sphereTextures.map(texture => new MeshStandardMaterial({ map: texture })),
    [sphereTextures]
  );

  const [activeSphereMaterial, setActiveSphereMaterial] = useState(sphereMaterials[0]);

  // Animate scale and rotation using react-spring
  const { scale } = useSpring({
    scale: isCube ? 1 : 1.4,
    config: { friction: 10, tension: 150 },
  });

  // useFrame for continuous rotation
  useFrame(() => {
    if (meshRef.current) {
      // Apply continuous auto-rotation
      if (isCube) {
        // Cube tumbles on all axes
        meshRef.current.rotation.x += 0.005;
        meshRef.current.rotation.y += 0.005;
        meshRef.current.rotation.z += 0.005;
    } else {
        // Sphere only rotates left-to-right on the Y-axis
        meshRef.current.rotation.x = 0;
        meshRef.current.rotation.z = 0;
        meshRef.current.rotation.y -= 0.01;
      }
    }
  });

  return (
    <animated.mesh
      ref={meshRef}
      onClick={() => {
        if (isCube) {
          // Select a random material when switching to sphere
          const randomIndex = Math.floor(Math.random() * sphereMaterials.length);
          setActiveSphereMaterial(sphereMaterials[randomIndex]);
        }
        setIsCube(!isCube);
      }}
      scale={scale}
      castShadow
      material={isCube ? cubeMaterials : activeSphereMaterial}
    >
      {isCube 
        ? <boxGeometry args={[5, 5, 5]} /> 
        : <sphereGeometry args={[2.5, 32, 32]} />}
    </animated.mesh>
  );
};

const SceneSetup = () => {
  const { scene } = useThree();
  const texture = useLoader(TextureLoader, backgroundImage);

  // Set texture wrapping to repeat for seamless panning
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;

  scene.background = texture;

  useFrame((_state, delta) => {
    // Slowly pan the texture background
    texture.offset.x += delta * 0.01;
  });

  return null;
};

const Shape = () => {
  return (
    <Canvas shadows camera={{ position: [0, 0, 15], fov: 50 }}>
      <ambientLight intensity={1} />
      <directionalLight position={[-2, 5, 2]} intensity={1} />
      <SpinningMesh />
      <SceneSetup />
    </Canvas>
  );
};

export default Shape;