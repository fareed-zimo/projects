import React, { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Content from "./Content";
import { videosArray } from "@/lib/contants";
import { useDispatch, useSelector } from "react-redux";
import {
  sequenceRepeatFn,
  videoStatusChange,
} from "@/src/features/metadataSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const videoRef = useRef(null);

  const { videoPlaying, sequenceRepeat, inInfo } = useSelector(
    (state) => state.metadata
  );
  const { currentVideo } = useSelector((state) => state.background);

  const handleVideoEnd = () => {
    dispatch(videoStatusChange(false));
    videoRef.current.src = currentVideo;
    dispatch(sequenceRepeatFn(!sequenceRepeat));
  };

  const videoIndex = Math.floor(Math.random() * videosArray.length);

  return (
    <div className=" overflow-hidden flex flex-col justify-between w-screen h-screen">
      {videoPlaying && (
        <video
          ref={videoRef}
          autoPlay
          muted
          onEnded={handleVideoEnd}
          src={videosArray[videoIndex].videoUrl}
          className="h-screen w-screen absolute object-cover"
        />
      )}
      {!inInfo && <Navbar />}
      <Content />
      {!inInfo && <Footer />}
    </div>
  );
};

export default HomePage;
