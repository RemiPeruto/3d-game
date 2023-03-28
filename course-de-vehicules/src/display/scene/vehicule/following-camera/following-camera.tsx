import { Camera, Euler, Quaternion, Vector3 } from "three";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";

interface CameraProps {
  vehiculePosition: Vector3; // Replace 'any' with the actual type of your character component
  vehiculeRotation: Euler;
  cameraDistance?: number;
  cameraPosition?: Vector3;
}

const FollowingCamera = ({
  vehiculePosition,
  vehiculeRotation,
  cameraDistance = 4,
  cameraPosition = new Vector3(0, 2, -4),
}: CameraProps) => {
  const cameraRef = useRef<Camera>(null);

  useFrame(() => {
    if (cameraRef.current) {
      // Calculate the character's forward direction
      const forwardDirection = new Vector3(0, 0, 1).applyQuaternion(
        new Quaternion().setFromEuler(vehiculeRotation)
      );

      // Make the camera look at the character's view target
      cameraRef.current.lookAt(
        forwardDirection.multiplyScalar(cameraDistance).add(vehiculePosition)
      );
    }
  });

  return (
    <PerspectiveCamera makeDefault ref={cameraRef} position={cameraPosition} />
  );
};

export default FollowingCamera;
