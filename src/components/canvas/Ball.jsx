import React, { Suspense, useRef } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { Decal, Float, useTexture } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Ball = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);
  const ballRef = useRef();
  const pointerPosition = useRef(null);

  const handlePointerDown = (event) => {
    event.stopPropagation();
    pointerPosition.current = {
      x: event.nativeEvent.clientX,
      y: event.nativeEvent.clientY,
    };
    event.target.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (!pointerPosition.current) return;

    const x = event.nativeEvent.clientX;
    const y = event.nativeEvent.clientY;
    ballRef.current.rotation.y += (x - pointerPosition.current.x) * 0.01;
    ballRef.current.rotation.x += (y - pointerPosition.current.y) * 0.01;
    pointerPosition.current = { x, y };
  };

  const handlePointerUp = (event) => {
    pointerPosition.current = null;
    if (event.target.hasPointerCapture(event.pointerId)) {
      event.target.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <group
      ref={ballRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <Float speed={1.75} rotationIntensity={1} floatIntensity={0.2}>
        <mesh castShadow receiveShadow scale={2.75}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color="#fff8eb"
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
          />
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            flatShading
            map={decal}
          />
        </mesh>
      </Float>
    </group>
  );
};

const BallScene = ({ icons }) => {
  const { size: { width, height } } = useThree();
  const itemSize = 112;
  const gap = 40;
  const columns = Math.max(1, Math.floor((width + gap) / (itemSize + gap)));

  return (
    <>
      {icons.map((icon, index) => {
        const row = Math.floor(index / columns);
        const column = index % columns;
        const itemsInRow = Math.min(columns, icons.length - row * columns);
        const rowWidth = itemsInRow * itemSize + (itemsInRow - 1) * gap;
        const x = -rowWidth / 2 + itemSize / 2 + column * (itemSize + gap);
        const y = height / 2 - itemSize / 2 - row * (itemSize + gap);

        return (
          <group key={icon} position={[x, y, 0]} scale={14.5}>
            <Ball imgUrl={icon} />
          </group>
        );
      })}
    </>
  );
};

const BallCanvas = ({ icons }) => {
  return (
    <Canvas
      frameloop="always"
      orthographic
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 500] }}
      className="!absolute inset-0"
      style={{ touchAction: 'pan-y' }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={0.25} />
        <directionalLight position={[0, 0, 1000]} />
        <BallScene icons={icons} />
      </Suspense>
    </Canvas>
  );
};

export default BallCanvas;