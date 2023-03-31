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

  // created heightmap and normalmap following the article -> https://kcclemo.neocities.org/creating-height-and-normal-maps/
  const rainbowRoadHeightMap = "assets/floor/rainbow-road-bump.png";
  const heightMap = useLoader(TextureLoader, rainbowRoadHeightMap);

  const rainbowRoadNormalMap = "assets/floor/rainbow-road-bump-normal-map.png";
  const normalMap = useLoader(TextureLoader, rainbowRoadNormalMap);

  return (
    <Plane
      args={[width, height, widthSegments, heightSegments]}
      rotation={[1.5 * Math.PI, 0, 0]}
      position={[0, -30.5, 0]}
    >
      <meshStandardMaterial
        normalMap={normalMap}
        displacementMap={heightMap}
        displacementScale={41}
        map={colorMap}
      />
    </Plane>
  );
};

export default Floor;
