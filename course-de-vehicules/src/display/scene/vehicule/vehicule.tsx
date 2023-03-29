import { Euler, Vector3 } from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { Action, VehiculeInformations } from "../../display";
import React from "react";
import FollowingCamera from "./following-camera";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export type VehiculeProps = VehiculeInformations & {
  handleClick: () => void;
  actionMapActive: Record<Action, boolean>;
};

const Vehicule = ({ informations, actionMapActive }: VehiculeProps) => {
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
    setXRotation,
    setYRotation,
    setZRotation,
    setXPosition,
    setYPosition,
    setZPosition,
    setXScale,
    setYScale,
    setZScale,
  } = informations;

  const position = new Vector3(xPosition, yPosition, zPosition);
  const rotation = new Euler(xRotation, yRotation, zRotation);
  const scale = new Vector3(xScale, yScale, zScale);

  const renderFunction = (dt: number): void => {
    let dL = new Vector3(0, 0, 0);
    let dtheta = new Vector3(0, 0, 0);

    if (actionMapActive.forward) {
      dL.add(new Vector3(0, 0, 1));
    }
    if (actionMapActive.backward) {
      dL.add(new Vector3(0, 0, -1));
    }
    if (actionMapActive.left) {
      dL.add(new Vector3(1, 0, 0));
      dtheta.add(new Vector3(0, 1, 0));
    }
    if (actionMapActive.right) {
      dL.add(new Vector3(-1, 0));
      dtheta.add(new Vector3(0, -1, 0));
    }
    dL.multiplyScalar(dt);
    dL.applyEuler(rotation);
    dL.add(new Vector3(xPosition, yPosition, zPosition));
    dtheta.multiplyScalar(0.041);
    dtheta.add(new Vector3(xRotation, yRotation, zRotation));
    setXPosition(dL.x);
    setYPosition(dL.y);
    setZPosition(dL.z);
    setXRotation(dtheta.x);
    setYRotation(dtheta.y);
    setZRotation(dtheta.z);
  };

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
