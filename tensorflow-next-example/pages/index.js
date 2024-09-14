import * as mobilenet from "@tensorflow-models/mobilenet";
import { useEffect, useRef, useState } from "react";
import * as tf from "@tensorflow/tfjs";

export default function Home() {
  const [img, setImg] = useState(null);
  const [model, setModel] = useState(null);

  const ref = useRef();

  const loadModel = async () => {
    console.log("Model loading..");
    const loadedModel = await mobilenet.load();
    setModel(loadedModel);
    console.log("Model loaded..");
  };
  useEffect(() => {
    loadModel();
  }, []);

  function handleImageUpload(event) {
    const image = event.target.files[0];
    setImg(image);
    classifyImage(image);
  }

  async function classifyImage(image) {
    if (ref.current && model) {
      console.log("ref.current", ref.current);
      ref.current.src = URL.createObjectURL(image);
      ref.current.onload = async () => {
        const predictions = await model.classify(ref.current);
        console.log(predictions);
        document.getElementById(
          "prediction"
        ).innerHTML = `Predicted:<br /> ${predictions
          .map((p) => `${p.className}: ${p.probability.toFixed(2)}`)
          .join("<br />")}`;
      };
    }
  }

  return (
    <main className="w-full h-[100vh] flex">
      <input type="file" onChange={handleImageUpload} />
      <br />
      <div>
        <p id="prediction"></p>
        <br />
        <img
          ref={ref}
          src={img ? URL.createObjectURL(img) : null}
          alt="upload-preview"
          style={{ maxWidth: "100%", maxHeight: "30vh" }}
        />
      </div>
    </main>
  );
}
