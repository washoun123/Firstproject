// ModelViewer.jsx

import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';

function Model() {
  // Load the GLB model
  const { scene } = useGLTF('character-a.glb'); // Replace with your model path
  return <primitive object={scene} scale={1} />;
}

export default function ModelViewer1() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{ width: '100%', height: '500px', position: 'relative' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && (
        <div
          style={{
            position: 'absolute',
            top: 80,
            left: 20,
            background: 'rgba(0,0,0,0.7)',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '4px',
            zIndex: 1,
          }}
        >
          Omor
        </div>
      )}
      <Canvas camera={{ position: [0, 2, 5], fov: 100 }}>
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={0.5} />

        {/* 3D Model */}
        <React.Suspense fallback={null}>
          <Model />
          <Environment preset="warehouse" background={false} />
        </React.Suspense>

        {/* Camera Controls */}
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
}