import * as tfjs from "@tensorflow/tfjs";
import * as qna from "@tensorflow-models/qna";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [model, setModel] = useState();
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState([]);

  const loadModel = async () => {
    const loadedModel = await qna.load();
    setModel(loadedModel);
    setLoading(false);
  };

  useEffect(() => {
    loadModel();
  }, []);

  const handleClick = async () => {
    const answers = await model.findAnswers(question, text);
    setAnswer(answers);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="p-5 h-[100vh] flex flex-col space-y-2 justify-start">
      <div className="flex flex-col space-y-3">
        <textarea
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
          className="resize"
          placeholder="text"
        />
        <input
          type="text"
          onChange={(e) => setQuestion(e.target.value)}
          value={question}
          placeholder="question"
          className="w-[250px]"
        />
        <button
          className="py-2 px-3 border-2 border-black rounded-lg bg-white text-black w-[100px]"
          onClick={handleClick}
        >
          Search
        </button>
      </div>
      {answer.map((item, index) => {
        return <p key={index}>{item.text}</p>;
      })}
    </main>
  );
}
