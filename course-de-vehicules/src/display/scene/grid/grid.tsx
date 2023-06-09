import { Plane, Text } from "@react-three/drei";

type PlaneProps = {
    size: number;
}
const XZPlane = ({ size }: PlaneProps) => (
    <Plane
        args={[size, size, size, size]}
        rotation={[1.5 * Math.PI, 0, 0]}
        position={[0, 0, 0]}
    >
        <meshStandardMaterial attach="material" color="#f9c74f" wireframe />
    </Plane>
);

const XYPlane = ({ size }: PlaneProps) => (
    <Plane
        args={[size, size, size, size]}
        rotation={[0, 0, 0]}
        position={[0, 0, 0]}
    >
        <meshStandardMaterial attach="material" color="pink" wireframe />
    </Plane>
);

const YZPlane = ({ size }: PlaneProps) => (
    <Plane
        args={[size, size, size, size]}
        rotation={[0, Math.PI / 2, 0]}
        position={[0, 0, 0]}
    >
        <meshStandardMaterial attach="material" color="#80ffdb" wireframe />
    </Plane>
);

const Grid = ({ size }: PlaneProps) => {
    return (
        <group>
            <Text
                color="white" // default
                anchorX="center" // default
                anchorY="middle" // default
                position={[size / 2 + 1, 0, 0]}
                scale={[4, 4, 4]}
            >
                X+
            </Text>
            <Text
                color="white" // default
                anchorX="center" // default
                anchorY="middle" // default
                position={[-size / 2 - 1, 0, 0]}
                scale={[4, 4, 4]}
            >
                X-
            </Text>
            <Text
                color="white" // default
                anchorX="center" // default
                anchorY="middle" // default
                position={[0, size / 2 + 1, 0]}
                scale={[4, 4, 4]}
            >
                Y+
            </Text>
            <Text
                color="white" // default
                anchorX="center" // default
                anchorY="middle" // default
                position={[0, -size / 2 - 1, 0]}
                scale={[4, 4, 4]}
            >
                Y-
            </Text>
            <Text
                color="white" // default
                anchorX="center" // default
                anchorY="middle" // default
                position={[0, 0, size / 2 + 1]}
                scale={[4, 4, 4]}
            >
                Z+
            </Text>
            <Text
                color="white" // default
                anchorX="center" // default
                anchorY="middle" // default
                position={[0, 0, -size / 2 - 1]}
                scale={[4, 4, 4]}
            >
                Z-
            </Text>
            <XZPlane size={size} />
            <XYPlane size={size} />
            <YZPlane size={size} />
        </group>
    );
}

export default Grid;
