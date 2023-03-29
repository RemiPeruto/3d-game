import React, { useState } from "react";
import Controls from "./controls/controls";
import { DisplayContainer } from "./display.style";
import MyScene from "./scene/scene";
import { Euler, Vector3 } from "three";

export type VehiculeInformations = {
  informations: {
    xPosition: number;
    yPosition: number;
    zPosition: number;
    xRotation: number;
    yRotation: number;
    zRotation: number;
    xScale: number;
    yScale: number;
    zScale: number;
    setXPosition: (value: number) => void;
    setYPosition: (value: number) => void;
    setZPosition: (value: number) => void;
    setXRotation: (value: number) => void;
    setYRotation: (value: number) => void;
    setZRotation: (value: number) => void;
    setXScale: (value: number) => void;
    setYScale: (value: number) => void;
    setZScale: (value: number) => void;
  };
};

export type Action = "forward" | "backward" | "left" | "right";

const actionMapKeys: Record<Action, string[]> = {
  forward: ["arrowup", "z"],
  backward: ["arrowdown", "s"],
  left: ["arrowleft", "q"],
  right: ["arrowright", "d"],
};

export const positionInit = new Vector3(-37.6, 0, 7.5);
const rotationInit = new Euler(0, -3.1, 0);

const Display = () => {
  const [xPosition, setXPosition] = useState(positionInit.x);
  const [yPosition, setYPosition] = useState(positionInit.y);
  const [zPosition, setZPosition] = useState(positionInit.z);

  const [xRotation, setXRotation] = useState(rotationInit.x);
  const [yRotation, setYRotation] = useState(rotationInit.y);
  const [zRotation, setZRotation] = useState(rotationInit.z);

  const [xScale, setXScale] = useState(1);
  const [yScale, setYScale] = useState(1);
  const [zScale, setZScale] = useState(1);

  const [actionMapActive, setActionMapActive] = useState<
    Record<Action, boolean>
  >({
    backward: false,
    forward: false,
    left: false,
    right: false,
  });

  const keyMapAction: Record<string, Action> = Object.entries(
    actionMapKeys
  ).reduce((result, [action, keys]) => {
    keys.forEach((key) => {
      result[key] = action as Action;
    });
    return result;
  }, {} as Record<string, Action>);

  const isControl = (action: Action): boolean => {
    return Object.values(keyMapAction).includes(action);
  };

  return (
    <DisplayContainer>
      <MyScene
        informations={{
          xPosition,
          yPosition,
          zPosition,
          xRotation,
          yRotation,
          zRotation,
          xScale,
          yScale,
          zScale,
          setXPosition,
          setYPosition,
          setZPosition,
          setXRotation,
          setYRotation,
          setZRotation,
          setXScale,
          setYScale,
          setZScale,
        }}
        actionMapActive={actionMapActive}
      />
      <Controls
        informations={{
          xPosition,
          yPosition,
          zPosition,
          xRotation,
          yRotation,
          zRotation,
          xScale,
          yScale,
          zScale,
          setXPosition,
          setYPosition,
          setZPosition,
          setXRotation,
          setYRotation,
          setZRotation,
          setXScale,
          setYScale,
          setZScale,
        }}
        keyboard={{
          actionMapActive,
          setActionMapActive,
          keyMapAction,
          isControl,
        }}
      />
    </DisplayContainer>
  );
};

export default Display;
