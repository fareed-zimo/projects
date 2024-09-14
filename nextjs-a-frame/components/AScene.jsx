import "aframe"; // Ensure aframe is imported
import { Entity, Scene } from "aframe-react";
import React, { useMemo } from "react";
import "@c-frame/aframe-particle-system-component";

const generateTrees = (count) => {
  const trees = [];
  for (let i = 0; i < count; i++) {
    const position = {
      x: Math.random() * 500 - 100,
      y: 0,
      z: Math.random() * 500 - 100,
    };

    trees.push(
      <Entity
        key={i}
        obj-model="obj: #tree-obj; mtl: #tree-mtl"
        position={`${position.x} 16.852 ${position.z}`}
        scale={`30 30 30`}
      />
    );
  }
  return trees;
};

const AScene = (props) => {
  const trees = useMemo(() => generateTrees(100), []);

  return (
    <Scene fog="type: exponential; color: #AAA; density: 0.00325">
      <a-assets>
        <img id="skyTexture" src="/Designer.jpeg" alt="skyTexture" />
        <a-mixin id="tree-obj" src="/tree/snowy_tree.obj"></a-mixin>
        <a-mixin id="tree-mtl" src="/tree/model.mtl"></a-mixin>
        <a-asset-item id="tree-gltf" src="/snowy_tree.gltf"></a-asset-item>
      </a-assets>

      <Entity
        primitive="a-plane"
        rotation="-90 0 0"
        height="1000"
        width="1000"
        material={{ color: "#fff" }}
      />
      <Entity primitive="a-light" type="ambient" color="#AAA" />

      <Entity
        primitive="a-light"
        type="directional"
        intensity="5.5"
        position="-3 6 16"
        color="#a59698"
        groundColor="#a59698"
        castShadow={true}
      />

      <Entity
        primitive="a-sky"
        height="2048"
        radius="500"
        theta-length="98"
        width="2048"
        src="#skyTexture"
      />

      <Entity
        particle-system={{
          preset: "snow",
          particleCount: 100000,
          positionSpread: "1000 1000 1000",
        }}
      />

      {trees}

      <Entity primitive="a-camera" position={{ x: 2, y: 11.6, z: 26 }} />
    </Scene>
  );
};

export default AScene;
