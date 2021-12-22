import "./App.css";
import "aframe-charts-component";

import "a-framedc";
import { Entity, Scene } from "aframe-react";
import { commits } from "./commits";

function App() {
  return (
    <Scene
      embedded
      vr-mode-ui={{ enabled: true }}
      arjs={{ sourcetype: "webcam" }}
      sourceWidth="1280"
    >
      <Entity barchartstack={{ src: commits }} />

      <Entity primitive="a-camera" position="4 5 8.7" />
    </Scene>
  );
}

export default App;
