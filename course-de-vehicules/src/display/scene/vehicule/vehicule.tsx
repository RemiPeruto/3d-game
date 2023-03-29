import { Euler, Vector3 } from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { VehiculeInformations } from "../../display";
import React from "react";
import FollowingCamera from "./following-camera";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export type VehiculeProps = VehiculeInformations & {
  handleClick: () => void;
  renderFunction: (dt: number) => void;
};

const Vehicule = ({ informations, renderFunction }: VehiculeProps) => {
  const {
    xRotation,
    yRotation,
    zRotation,
    xPosition,
    yPosition,
    zPosition,
    xScale,
    yScale,
    zScale,
  } = informations;

  const position = new Vector3(xPosition, yPosition, zPosition);
  const rotation = new Euler(xRotation, yRotation, zRotation);
  const scale = new Vector3(xScale, yScale, zScale);

  useFrame(({ clock }, delta) => {
    renderFunction(delta);
  });

  const mario = "assets/mario_kart/scene.gltf"; // https://sketchfab.com/3d-models/mario-kart-66cc131575344ab69238ec5872f24927
  const gltf = useLoader(GLTFLoader, mario);
  return (
    <group position={position} rotation={rotation} scale={scale}>
      <primitive object={gltf.scene} position={new Vector3(0, 0, 0)} />
      <FollowingCamera
        cameraDistance={4.1}
        vehiculePosition={position}
        vehiculeRotation={rotation}
        cameraPosition={new Vector3(0, 2, -4.1)}
      />
    </group>
  );
};

export default Vehicule;
