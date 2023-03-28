import { Euler, Vector3 } from "three";
import { useFrame } from "@react-three/fiber";
import { VehiculeInformations } from "../../display";
import { Box } from "@react-three/drei";
import React from "react";
import FollowingCamera from "./following-camera";

export type VehiculeProps = VehiculeInformations & {
  handleClick: () => void;
};

const Vehicule = ({ informations, handleClick }: VehiculeProps) => {
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

  const renderFunction = (value: number): void => {
    setYRotation(yRotation + 0.01);
    setZPosition(4 * Math.sin(value));
    setXPosition(4 * Math.cos(value));
  };

  useFrame(({ clock }) => {
    renderFunction(clock.getElapsedTime());
  });

  return (
    <group position={position} rotation={rotation} scale={scale}>
      <Box
        args={[1, 1, 1]}
        onClick={handleClick}
        position={new Vector3(0, 0, 0)}
      >
        <meshStandardMaterial attach="material" color="white" />
      </Box>
      <Box
        args={[1, 1, 1]}
        onClick={handleClick}
        position={new Vector3(0, 0, 4)}
      >
        <meshStandardMaterial attach="material" color="red" />
      </Box>
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
