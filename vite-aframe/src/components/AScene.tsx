import "aframe";
import "types-aframe-react";

import { Entity, Scene } from "aframe-react";
import "@c-frame/aframe-particle-system-component";

const AScene = () => {
  return (
    <>
      <Scene fog="type: linear; color: #AAA">
        <Entity
          particle-system={{ preset: "snow", particleCount: 5000 }}
          position="0 0 0"
        />
        <a-assets>
          <img
            id="skyTexture"
            src="https://images.unsplash.com/photo-1721009098875-75613b6db44e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="skyTexture"
          />
        </a-assets>

        <Entity
          primitive="a-plane"
          rotation="-98 -88"
          height="1000"
          width="1000"
          material={{ color: "#9ba6b5", opacity: 0.7 }}
        />

        <Entity primitive="a-light" type="ambient" color="#fff" />

        <Entity
          primitive="a-light"
          type="directional"
          intensity="5.5"
          position="-3 -5 16"
        />

        <Entity
          primitive="a-sky"
          height="2048"
          radius="100"
          theta-length="98"
          width="2048"
          src="#skyTexture"
        />

        <Entity
          text={{
            value: `Welcome Fareed`,
            align: "center",
            color: "#FFC650",
            width: "20.5",
            height: "20.5",
          }}
          position={{ x: 0, y: 13.5, z: -4 }}
        />

        <Entity
          id="cylinderStart"
          geometry={{ primitive: "sphere", radius: 5, height: 30 }}
          position={{ x: 1, y: 4.75, z: -3 }}
          material={{
            color: "#FFC650",
          }}
        />

        <Entity id="fog" />

        <Entity primitive="a-camera" position={{ x: 2, y: 11.6, z: 10 }} />
      </Scene>
    </>
  );
};

export default AScene;
