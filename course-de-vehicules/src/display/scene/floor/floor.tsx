import { Plane } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

type FloorProps = {
  width: number;
  height: number;
  widthSegments: number;
  heightSegments: number;
};
const Floor = ({
  width,
  height,
  widthSegments,
  heightSegments,
}: FloorProps) => {
  const rainbowRoad = "assets/floor/rainbow-road.png"; // https://www.spriters-resource.com/fullview/6868/
  const colorMap = useLoader(TextureLoader, rainbowRoad);
  return (
    <Plane
      args={[width, height, widthSegments, heightSegments]}
      rotation={[1.5 * Math.PI, 0, 0]}
      position={[0, 0, 0]}
    >
      <meshStandardMaterial map={colorMap} />
    </Plane>
  );
};

export default Floor;
