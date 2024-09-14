import React, { useState } from "react";
import { database } from "@/lib/firbaseConfig";
import { ref, set, push } from "firebase/database";
import { useRouter } from "next/router";

const Write = () => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const router = useRouter();

  const SaveData = () => {
    const newDocRef = push(ref(database, "nature/fruits"));
    set(newDocRef, {
      fruitName: value1,
      fruitDescription: value2,
    }).catch((error) => {
      console.error(error);
    });
  };
  return (
    <div>
      <label className="font-medium mx-4">Name:</label>
      <input
        type="text"
        value={value1}
        onChange={(e) => setValue1(e.target.value)}
      />{" "}
      <br />
      <label className="font-medium mx-4">Description:</label>
      <input
        type="text"
        value={value2}
        onChange={(e) => setValue2(e.target.value)}
      />
      <br />
      <button
        className="border-black rounded-lg border-2 bg-cyan-950 text-white py-1 px-2 mx-4 my-4"
        onClick={SaveData}
      >
        Save Data
      </button>
    </div>
  );
};

export default Write;
