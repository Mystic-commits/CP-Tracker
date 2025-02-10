import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

function FloatingCube() {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1;
      mesh.current.rotation.y += 0.01;
    }
  });

  const geometry = useMemo(() => new THREE.BoxGeometry(2, 2, 2), []);
  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          color: { value: new THREE.Color("#4f46e5") },
        },
        vertexShader: `
          varying vec2 vUv;
          varying vec3 vPosition;
          void main() {
            vUv = uv;
            vPosition = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          varying vec2 vUv;
          varying vec3 vPosition;
          uniform float time;
          uniform vec3 color;
          
          void main() {
            float edge = 1.0 - smoothstep(0.0, 0.1, abs(vPosition.x));
            edge *= 1.0 - smoothstep(0.0, 0.1, abs(vPosition.y));
            edge *= 1.0 - smoothstep(0.0, 0.1, abs(vPosition.z));
            vec3 finalColor = mix(color, vec3(1.0), edge * 0.5);
            gl_FragColor = vec4(finalColor, 0.8);
          }
        `,
        transparent: true,
        side: THREE.DoubleSide,
      }),
    []
  );

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={1}
    >
      <mesh ref={mesh} geometry={geometry} material={material} />
    </Float>
  );
}

function AnimatedStars() {
  return (
    <Stars
      radius={50}
      depth={50}
      count={1000}
      factor={4}
      saturation={0}
      fade
      speed={1}
    />
  );
}

const Hero3D = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        gl={{ antialias: true }}
      >
        <color attach="background" args={['#030712']} />
        <fog attach="fog" args={['#030712', 5, 20]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <FloatingCube />
        <AnimatedStars />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

export default Hero3D;