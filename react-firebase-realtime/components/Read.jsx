import React, { useEffect, useState } from "react";
import { ref, remove, onValue } from "firebase/database";
import { useRouter } from "next/router";
import { database } from "@/lib/firbaseConfig";
import Write from "./Write";

const Read = () => {
  const [fruits, setFruits] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const dbRef = ref(database, "nature/fruits");

    const unsubscribe = onValue(dbRef, (snapshot) => {
      console.log("======");
      if (snapshot.exists()) {
        const myData = snapshot.val();
        const tempArray = Object.keys(myData).map((myFireId) => {
          return { ...myData[myFireId], id: myFireId };
        });
        setFruits(tempArray);
      } else {
        console.log("no data available");
      }
    });

    return () => unsubscribe();
  }, []);

  const deleteFruit = async (fruitId) => {
    const dbRef = ref(database, "nature/fruits/" + fruitId);
    await remove(dbRef);
  };

  if (fruits.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div className="space-y-10 my-4 mx-2">
      <div>
        <Write />
      </div>
      <ul>
        <h1 className="font-bold text-2xl">Data List</h1>
        {fruits.map((fruit, index) => (
          <li key={index}>
            <span className="font-bold">Name:</span> {fruit.fruitName}{" "}
            <span className="font-bold">Description:</span>{" "}
            {fruit.fruitDescription} :
            <button
              className="border-2 border-black bg-white py-1 px-2 mx-2 rounded-lg "
              onClick={() => {
                router.push(`/update/${fruit.id}`);
              }}
            >
              Update
            </button>
            <button
              className="border-2 border-black bg-white py-1 px-2 mx-2 rounded-lg "
              onClick={() => {
                deleteFruit(fruit.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Read;
