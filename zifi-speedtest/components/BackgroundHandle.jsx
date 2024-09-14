import { bgColors, imagesArray, videosArray } from "@/lib/contants";
import {
  changeBackgroundImage,
  changeBackgroundVideo,
} from "@/src/features/bgSlice";
import {
  imageStatusChange,
  sequenceRepeatFn,
  solidStatusChange,
  videoStatusChange,
} from "@/src/features/metadataSlice";
import { changeTheme } from "@/src/features/themeSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const BackgroundHandle = () => {
  const dispatch = useDispatch();
  const { videoPlaying, solidBg, imageBg, sequenceRepeat } = useSelector(
    (state) => state.metadata
  );

  const defaultTheme = {
    id: 0,
    color: "#000000",
    secondary: "black",
    text: "white",
  };
  let colorIndex = Math.floor(Math.random() * bgColors.length);
  let imageIndex = Math.floor(Math.random() * imagesArray.length);
  const videoIndex = Math.floor(Math.random() * videosArray.length);

  // dispatch(sequenceRepeatFn(!sequenceRepeat));

  useEffect(() => {
    dispatch(solidStatusChange(true));
    const timer2 = setTimeout(() => {
      dispatch(imageStatusChange(true));
      dispatch(solidStatusChange(false));
    }, 10000);
    const timer3 = setTimeout(() => {
      dispatch(imageStatusChange(false));
      dispatch(solidStatusChange(false));
      dispatch(videoStatusChange(true));
    }, 30000);

    return () => {
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [sequenceRepeat]);

  useEffect(() => {
    if (!videoPlaying) {
      const video = videosArray[videoIndex];
      dispatch(changeTheme(defaultTheme));
      dispatch(changeBackgroundVideo(video.videoUrl));
    }
  }, [videoPlaying]);

  useEffect(() => {
    const changeImage = async () => {
      if (!videoPlaying && imageBg) {
        const image = imagesArray[imageIndex];
        dispatch(changeTheme(defaultTheme));
        dispatch(changeBackgroundImage(image));
        imageIndex = imageIndex >= imagesArray.length - 1 ? 0 : imageIndex + 1;
      }
    };
    changeImage();
  }, [imageBg]);

  useEffect(() => {
    const changeThemeFn = () => {
      if (!videoPlaying && solidBg) {
        const theme = bgColors[colorIndex];
        dispatch(changeTheme(theme));
        colorIndex = colorIndex >= bgColors.length - 1 ? 0 : colorIndex + 1;
      }
    };
    changeThemeFn();
  }, [solidBg]);
  return <></>;
};

export default BackgroundHandle;
