"use client";
import { load as cocoSSDLoad } from "@tensorflow-models/coco-ssd";
import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import * as tf from "@tensorflow/tfjs";
import { renderPredictions } from "@/utils/render-predictions";

let detecteInterval;

const ObjectDetection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const runCoco = async () => {
    setIsLoading(true);
    const net = await cocoSSDLoad();
    setIsLoading(false);

    detecteInterval = setInterval(() => {
      runObjectDetection(net);
    }, 10);
  };

  const runObjectDetection = async (net) => {
    if (
      canvasRef.current &&
      webcamRef.current !== null &&
      webcamRef.current.video?.readyState === 4
    ) {
      canvasRef.current.width = webcamRef.current.video.videoWidth;
      canvasRef.current.height = webcamRef.current.video.videoHeight;

      //find all the detected objects
      const detectedObjects = await net.detect(
        webcamRef.current.video,
        undefined,
        0.6
      );
      console.log(detectedObjects);
      const context = canvasRef.current.getContext("2d"); // to draw on canvas
      await renderPredictions(detectedObjects, context);
    }
  };

  const showMyVideo = () => {
    if (
      webcamRef.current !== null &&
      webcamRef.current.video?.readyState === 4
    ) {
      const myVideoWidth = webcamRef.current.video.videoWidth;
      const myVideoHeight = webcamRef.current.video.videoHeight;

      webcamRef.current.video.width = myVideoWidth;
      webcamRef.current.video.height = myVideoHeight;
    }
  };

  useEffect(() => {
    runCoco();
    showMyVideo();
  }, []);

  if (isLoading) {
    return <div className="gradient-text">Loading AI Model...</div>;
  }

  return (
    <div className="mt-8">
      <div className="relative flex justify-center items-center gradient p-1.5 rounded-md">
        {/* webcam */}
        <Webcam
          ref={webcamRef}
          className="rounded-md w-full lg:h-[420px] "
          muted
        />
        {/* canvas */}
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 z-50 w-full lg:h-[420px]"
        ></canvas>
      </div>
    </div>
  );
};

export default ObjectDetection;
