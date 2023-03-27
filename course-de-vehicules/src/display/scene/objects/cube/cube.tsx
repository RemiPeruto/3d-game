import { Euler, Vector3 } from "three";
import { Box } from "@react-three/drei";
import React from "react";

export type CubeProps = {
  position: Vector3;
  rotation: Euler;
  scale: Vector3;
  handleClick: () => void;
  children?: JSX.Element;
};

const Cube = ({
  position,
  rotation,
  scale = new Vector3(1, 1, 1),
  handleClick,
  children,
}: CubeProps) => (
  <group position={position} rotation={rotation} scale={scale}>
    <Box args={[1, 1, 1]} onClick={handleClick}>
      <meshStandardMaterial attach="material" color="white" />
    </Box>
    {children !== undefined && children}
  </group>
);

export default Cube;
