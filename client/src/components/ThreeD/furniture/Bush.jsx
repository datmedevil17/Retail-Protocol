
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Bushnpm(props) {
  const { nodes, materials } = useGLTF('./models/Agapanthus.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-0.215, 0, 0]} scale={0.01}>
        <mesh castShadow receiveShadow geometry={nodes.Mesh.geometry} material={materials.leaf_1} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_1.geometry}
          material={materials.leaf_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_2.geometry}
          material={materials.leaf_3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_3.geometry}
          material={materials.stem_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_4.geometry}
          material={materials.stem_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_5.geometry}
          material={materials.flower_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_6.geometry}
          material={materials.stamen_1}
        />
      </group>
      <group position={[1.106, 0, 0.144]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh002.geometry}
          material={materials.leaf_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh002_1.geometry}
          material={materials.leaf_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh002_2.geometry}
          material={materials.leaf_3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh002_3.geometry}
          material={materials.stem_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh002_4.geometry}
          material={materials.stem_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh002_5.geometry}
          material={materials.flower_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh002_6.geometry}
          material={materials.stamen_1}
        />
      </group>
    </group>
  )
}

useGLTF.preload('./models/Agapanthus.glb')
