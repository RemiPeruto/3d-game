import { Camera, Euler, Vector3 } from "three";
import { useFrame } from "@react-three/fiber";
import Cube, { CubeProps } from "../objects/cube";
import { VehiculeInformations } from "../../display";
import { PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";

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

  const cameraRef = useRef<Camera>(null);

  const renderFunction = (value: number): void => {
    setYRotation(yRotation + 0.01);
    setXPosition(4 * Math.sin(value));
  };

  useFrame(({ clock }) => {
    renderFunction(clock.getElapsedTime());

    if (cameraRef.current) {
      cameraRef.current.lookAt(position);
    }
  });

  return (
    <Cube
      position={position}
      rotation={rotation}
      scale={scale}
      handleClick={handleClick}
    >
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        position={new Vector3(-2, 1, -2)}
      />
    </Cube>
  );
};

export default Vehicule;
