import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { OrbitControls, Text } from "@react-three/drei";
import Vehicule from "./vehicule";
import { Vector3 } from "three";
import { SceneContainer } from "./scene.style";
import {
  Action,
  BoiteRotationInformations,
  positionInit,
  VehiculeInformations,
} from "../display";
import ItemBox from "./objects/item-box";
import Floor from "./floor";

type MySceneProps = VehiculeInformations &
  BoiteRotationInformations & {
    actionMapActive: Record<Action, boolean>;
    renderFunction: (dt: number) => void;
  };

const MyScene = ({ informations, renderFunction, boite }: MySceneProps) => {
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
          <Vehicule
            handleClick={() => console.log("clicked on the vehicule")}
            informations={informations}
            renderFunction={renderFunction}
          />
          <ItemBox
            position={positionInit.clone().add(new Vector3(0, 1, -10))}
            rotation={boite.rotation}
            setRotation={boite.setRotation}
          />
          <Floor
            width={200}
            height={200}
            widthSegments={10}
            heightSegments={10}
          />
        </Suspense>
      </Canvas>
    </SceneContainer>
  );
};

export default MyScene;
