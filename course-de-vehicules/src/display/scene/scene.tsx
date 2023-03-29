import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { OrbitControls, Text } from "@react-three/drei";
import Grid from "./grid";
import Vehicule from "./vehicule";
import { Euler, Vector3 } from "three";
import Cube from "./objects/cube";
import { SceneContainer } from "./scene.style";
import { Action, VehiculeInformations } from "../display";

type MySceneProps = VehiculeInformations & {
  actionMapActive: Record<Action, boolean>;
};

const MyScene = ({ informations, actionMapActive }: MySceneProps) => {
  return (
    <SceneContainer>
      <Canvas>
        <Suspense
          fallback={
            <Text
              color="white" // default
              anchorX="center" // default
              anchorY="middle" // default
            >
              Loading
            </Text>
          }
        >
          <OrbitControls />
          <directionalLight intensity={0.5} position={[6, 2, 1]} />
          <ambientLight intensity={0.1} />
          <Grid size={14} />
          <Vehicule
            handleClick={() => console.log("clicked on the vehicule")}
            informations={informations}
            actionMapActive={actionMapActive}
          />
          <Cube
            handleClick={() => console.log("clicked on the cube")}
            rotation={new Euler(0, 0, 0)}
            position={new Vector3(3, 3, 3)}
            scale={new Vector3(1, 1, 1)}
          />
        </Suspense>
      </Canvas>
    </SceneContainer>
  );
};

export default MyScene;
