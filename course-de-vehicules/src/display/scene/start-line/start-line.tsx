import { Plane } from "@react-three/drei";
import { Euler, TextureLoader, Vector3 } from "three";
import React from "react";
import { useLoader } from "@react-three/fiber";

type StartLineProps = {
  position: Vector3;
};

const StartLine = ({ position }: StartLineProps) => {
  const chessBoard = "assets/start-line/Chess_Board.png"; // https://commons.wikimedia.org/wiki/File:Chess_Board.svg
  const colorMap = useLoader(TextureLoader, chessBoard);
  return (
    <group
      position={position.clone().setY(0.2)}
      rotation={new Euler(1.5 * Math.PI, 0, 0)}
    >
      <Plane args={[19, 10, 10, 10]}>
        <meshStandardMaterial map={colorMap} />
      </Plane>
    </group>
  );
};

export default StartLine;
