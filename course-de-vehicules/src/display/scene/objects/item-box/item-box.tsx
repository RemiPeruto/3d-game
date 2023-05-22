import { Euler, Vector3 } from "three";
import React, { useEffect, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

type ItemBoxProps = {
  position: Vector3;
};

const ItemBox = ({ position }: ItemBoxProps) => {
  const itemBox = "assets/mario_kart_item_box/scene.gltf"; //https://sketchfab.com/3d-models/mario-kart-item-box-8f6a2b6b17b844c5b5dfa38375289975
  const gltf = useLoader(GLTFLoader, itemBox);
  const [rotation, setRotation] = useState<Euler>(new Euler(0, 0, 0));
  useEffect(() => {
    gltf.scene.scale.multiplyScalar(0.02);
  }, []);

  useFrame((state, delta, frame) => {
    const newRotationVector = new Vector3(1, 1, 1)
      .multiplyScalar(delta)
      .add(new Vector3(rotation.x, rotation.y, rotation.z));
    setRotation(new Euler().setFromVector3(newRotationVector));
  });

  return (
    <group rotation={rotation} position={position}>
      <primitive object={gltf.scene} position={new Vector3(0, 0, 0)} />
    </group>
  );
};

export default ItemBox;
