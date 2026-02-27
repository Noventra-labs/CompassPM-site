"use client";

import { useRef, useState, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";

interface NodeData {
  name: string;
  position: [number, number, number];
  phase: number;
}

const nodes: NodeData[] = [
  { name: "Jira", position: [-1.5, 0.8, 0], phase: 0 },
  { name: "Notion", position: [1.2, 1.2, 0.3], phase: 1 },
  { name: "Feedback", position: [-0.8, -0.5, 0.5], phase: 2 },
  { name: "Ideas", position: [0.3, 0.2, -0.3], phase: 3 },
  { name: "Roadmap", position: [1.5, -0.3, 0.2], phase: 4 },
  { name: "PRDs", position: [-1.2, -1, -0.2], phase: 5 },
  { name: "Slack", position: [0.8, -1.2, 0.4], phase: 6 },
];

const connections = [
  [0, 1],
  [0, 3],
  [1, 3],
  [2, 3],
  [3, 4],
  [3, 5],
  [4, 6],
  [5, 6],
  [2, 6],
  [1, 4],
];

function Node({
  data,
  onHover,
  isHovered,
}: {
  data: NodeData;
  onHover: (name: string | null) => void;
  isHovered: boolean;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialY = data.position[1];

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const time = clock.getElapsedTime();
      meshRef.current.position.y =
        initialY + Math.sin(time * 1.2 + data.phase) * 0.12;
      meshRef.current.scale.setScalar(isHovered ? 1.3 : 1);
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={data.position}
      onPointerEnter={() => onHover(data.name)}
      onPointerLeave={() => onHover(null)}
    >
      <icosahedronGeometry args={[0.18, 1]} />
      <meshPhysicalMaterial
        color={isHovered ? "#ffffff" : "#6366F1"}
        metalness={0.2}
        roughness={0.1}
        transmission={0.6}
        transparent
        opacity={0.85}
      />
      <Html
        distanceFactor={4}
        position={[0, 0.35, 0]}
        center
        style={{
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        <span className="text-[11px] text-zinc-400 whitespace-nowrap font-medium">
          {data.name}
        </span>
      </Html>
    </mesh>
  );
}

function Connections({ hoveredNode }: { hoveredNode: string | null }) {
  const linesRef = useRef<THREE.Group>(null);

  const lineGeometries = useMemo(() => {
    return connections.map(([fromIdx, toIdx]) => {
      const from = nodes[fromIdx].position;
      const to = nodes[toIdx].position;
      const points = [new THREE.Vector3(...from), new THREE.Vector3(...to)];
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      return {
        geometry,
        fromNode: nodes[fromIdx].name,
        toNode: nodes[toIdx].name,
      };
    });
  }, []);

  return (
    <group ref={linesRef}>
      {lineGeometries.map((line, i) => {
        const isHovered =
          hoveredNode === line.fromNode || hoveredNode === line.toNode;
        return (
          <line key={i}>
            <bufferGeometry attach="geometry" {...line.geometry} />
            <lineBasicMaterial
              attach="material"
              color="#ffffff"
              transparent
              opacity={isHovered ? 0.5 : 0.12}
            />
          </line>
        );
      })}
    </group>
  );
}

function Particles() {
  const particlesRef = useRef<THREE.Points>(null);
  const particleCount = connections.length * 4;

  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = 0;
      pos[i * 3 + 1] = 0;
      pos[i * 3 + 2] = 0;
    }
    return pos;
  }, [particleCount]);

  useFrame(({ clock }) => {
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position
        .array as Float32Array;
      const time = clock.getElapsedTime();

      connections.forEach((conn, connIdx) => {
        const from = nodes[conn[0]].position;
        const to = nodes[conn[1]].position;

        for (let p = 0; p < 4; p++) {
          const idx = (connIdx * 4 + p) * 3;
          const t = ((time * 0.5 + p * 0.25) % 1) * 1;

          positions[idx] = from[0] + (to[0] - from[0]) * t;
          positions[idx + 1] = from[1] + (to[1] - from[1]) * t;
          positions[idx + 2] = from[2] + (to[2] - from[2]) * t;
        }
      });

      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#6366F1" transparent opacity={0.8} />
    </points>
  );
}

function Scene({ hoveredNode }: { hoveredNode: string | null }) {
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  useFrame(({ clock, pointer }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;

      // Mouse parallax
      const targetX = pointer.x * 0.15;
      const targetY = pointer.y * 0.15;
      groupRef.current.position.x +=
        (targetX - groupRef.current.position.x) * 0.05;
      groupRef.current.position.y +=
        (targetY - groupRef.current.position.y) * 0.05;
    }
  });

  return (
    <group ref={groupRef} scale={viewport.width < 6 ? 0.8 : 1}>
      <ambientLight intensity={0.4} color="#6366F1" />
      <pointLight position={[0, 3, 2]} intensity={1.2} color="#ffffff" />

      <Connections hoveredNode={hoveredNode} />
      <Particles />
    </group>
  );
}

function NodesGroup({
  onHover,
  hoveredNode,
}: {
  onHover: (name: string | null) => void;
  hoveredNode: string | null;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  useFrame(({ pointer }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;

      const targetX = pointer.x * 0.15;
      const targetY = pointer.y * 0.15;
      groupRef.current.position.x +=
        (targetX - groupRef.current.position.x) * 0.05;
      groupRef.current.position.y +=
        (targetY - groupRef.current.position.y) * 0.05;
    }
  });

  return (
    <group ref={groupRef} scale={viewport.width < 6 ? 0.8 : 1}>
      {nodes.map((node) => (
        <Node
          key={node.name}
          data={node}
          onHover={onHover}
          isHovered={hoveredNode === node.name}
        />
      ))}
    </group>
  );
}

export default function NetworkScene() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 50 }}
      frameloop="always"
      style={{ background: "transparent" }}
      gl={{ alpha: true }}
    >
      <Scene hoveredNode={hoveredNode} />
      <NodesGroup onHover={setHoveredNode} hoveredNode={hoveredNode} />
    </Canvas>
  );
}
