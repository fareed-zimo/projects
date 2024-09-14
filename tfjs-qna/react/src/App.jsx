import "./App.css";
import * as tfjs from "@tensorflow/tfjs";
import * as qna from "@tensorflow-models/qna";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [model, setModel] = useState();

  const loadModel = async () => {
    const loadedModel = await qna.load({
      modelUrl: "/tfjs-model/tensorflow/tfjs-model/mobilebert/1/model.json",
    });
    setModel(loadedModel);
  };

  useEffect(() => {
    loadModel();
  }, []);

  const handleClick = () => {
    console.log(model);
  };
  return (
    <>
      <input type="text" id="text" placeholder="text" />
      <input type="text" id="question" placeholder="question" />
      <button onClick={handleClick}>Search</button>
      <p id="answer"></p>
    </>
  );
}

export default App;
