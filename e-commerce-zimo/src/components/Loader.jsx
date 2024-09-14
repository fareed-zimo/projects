import React from "react";
import { TailSpin } from "react-loader-spinner";

const Loader = () => {
  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "0",
    height: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(255, 255, 255, 0.8)",
    zIndex: 99999,
  };

  return (
    <div
      style={style}
      className="flex justify-center items-center h-screen bg-orange-200 p-20 rounded-md"
    >
      <TailSpin
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
