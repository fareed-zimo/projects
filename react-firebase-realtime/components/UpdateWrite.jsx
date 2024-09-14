import React, { useEffect, useState } from "react";
import { app, database } from "@/lib/firbaseConfig";
import { getDatabase, ref, set, get } from "firebase/database";
import { useRouter } from "next/router";

const UpdateWrite = ({ fruitId }) => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      if (fruitId) {
        const dbRef = ref(database, "nature/fruits/" + fruitId);
        const data = await get(dbRef);
        console.log(data.exists());

        if (data.exists()) {
          const myData = data.val();
          setValue1(myData.fruitName);
          setValue2(myData.fruitDescription);
          console.log(myData);
        } else {
          console.log("error");
        }
      }
    };
    fetchData();
  }, [fruitId]);

  const SaveData = () => {
    const db = getDatabase(app);
    const newDocRef = ref(db, "nature/fruits/" + fruitId);
    set(newDocRef, {
      fruitName: value1,
      fruitDescription: value2,
    })
      .then(() => {
        router.push("/");
      })
      .catch((error) => {
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
        Update Data
      </button>
    </div>
  );
};

export default UpdateWrite;
