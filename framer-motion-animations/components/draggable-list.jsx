import { Reorder } from "framer-motion";
import React, { useState } from "react";

const list = ["React", "JavaScript", "Framer Motion", "CSS", "HTML"];

const DraggableList = () => {
  const [listItems, setListItems] = useState(list);

  return (
    <Reorder.Group
      axis="y"
      onReorder={setListItems}
      values={listItems}
      className="z-10"
    >
      {listItems.map((el) => (
        <Reorder.Item key={el} value={el} className="w-[40%]">
          <span>{el}</span>
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
};

export default DraggableList;
