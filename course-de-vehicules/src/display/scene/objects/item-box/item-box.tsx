import { Euler, Vector3 } from "three";
import React, { useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const ItemBox = () => {
  const itemBox = "assets/mario_kart_item_box/scene.gltf";
  const gltf = useLoader(GLTFLoader, itemBox);
  useEffect(() => {
    gltf.scene.scale.multiplyScalar(0.02);
  }, []);

  return (
    <group rotation={new Euler(1, 1, 1)} position={new Vector3(4, 1, 0)}>
      <primitive object={gltf.scene} position={new Vector3(0, 0, 0)} />
    </group>
  );
};

export default ItemBox;
