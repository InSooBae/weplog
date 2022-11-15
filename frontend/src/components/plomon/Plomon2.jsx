/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/라바.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <group name="Dino131">
          <group name="Mesh2">
            <group name="Body_A3">
              <skinnedMesh
                name="mesh_0"
                geometry={nodes.mesh_0.geometry}
                material={nodes.mesh_0.material}
                skeleton={nodes.mesh_0.skeleton}
              />
            </group>
            <group name="Face_A4">
              <skinnedMesh
                name="mesh_1"
                geometry={nodes.mesh_1.geometry}
                material={nodes.mesh_1.material}
                skeleton={nodes.mesh_1.skeleton}
              />
            </group>
            <group name="Head_A5">
              <skinnedMesh
                name="mesh_2"
                geometry={nodes.mesh_2.geometry}
                material={nodes.mesh_2.material}
                skeleton={nodes.mesh_2.skeleton}
              />
            </group>
            <group name="Horn_A_part16">
              <skinnedMesh
                name="mesh_3"
                geometry={nodes.mesh_3.geometry}
                material={nodes.mesh_3.material}
                skeleton={nodes.mesh_3.skeleton}
              />
            </group>
            <group name="Horn_A_part27">
              <skinnedMesh
                name="mesh_4"
                geometry={nodes.mesh_4.geometry}
                material={nodes.mesh_4.material}
                skeleton={nodes.mesh_4.skeleton}
              />
            </group>
            <group name="Tail_A8">
              <skinnedMesh
                name="mesh_5"
                geometry={nodes.mesh_5.geometry}
                material={nodes.mesh_5.material}
                skeleton={nodes.mesh_5.skeleton}
              />
            </group>
            <group name="Teeth_A9">
              <skinnedMesh
                name="mesh_6"
                geometry={nodes.mesh_6.geometry}
                material={nodes.mesh_6.material}
                skeleton={nodes.mesh_6.skeleton}
              />
            </group>
          </group>
          <group name="Root10">
            <primitive object={nodes.Dino_Center11} />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/라바.glb");