import UpdateWrite from "@/components/UpdateWrite";
import { useRouter } from "next/router";
import React from "react";

const update = () => {
  const router = useRouter();
  const fruitId = router.query.fruitId;

  return (
    <div>
      <UpdateWrite fruitId={fruitId} />
    </div>
  );
};

export default update;
