import React, { useRef, useState } from "react";

const HomeScreen = () => {
  const sourceRef = useRef();
  const videoRef = useRef();
  const startButtonRef = useRef();
  const stopButtonRef = useRef();

  const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);

  const recordedChunks = [];

  const handleSourceSelect = async () => {
    try {
      const ipcMainRenderer = window.ipc;
      await ipcMainRenderer.send("select-source");
      await ipcMainRenderer.on("select-source", async (source) => {
        sourceRef.current.innerText = source.name;

        const constraints = {
          audio: false,
          video: {
            mandatory: {
              chromeMediaSource: "desktop",
              chromeMediaSourceId: source.id,
            },
          },
        };

        //Create stream
        const stream = await navigator.mediaDevices.getUserMedia(constraints);

        videoRef.current.srcObject = stream;
        videoRef.current.play();

        //create media recorder
        const options = { mimeType: "video/webm; codecs=vp9" };
        const recorder = new MediaRecorder(stream, options);
        console.log(recorder);
        setMediaRecorder(recorder);
        console.log("mediaRecorder", mediaRecorder);

        // Register event handler
        recorder.ondataavailable = handleDataAvailable;
        recorder.onstop = handleStop;
      });
    } catch (error) {
      console.error("Error capturing desktop:", error);
    }
  };

  const handleDataAvailable = (e) => {
    console.log("video data available");
    recordedChunks.push(e.data);
  };

  const handleStop = async (e) => {
    console.log("STOPSTTOPSTPSO");
    const blob = new Blob(recordedChunks, {
      type: "video/webm; codecs=vp9",
    });
    const buffer = Buffer.from(await blob.arrayBuffer());

    const ipcMainRenderer = window.ipc;

    await ipcMainRenderer.send("save-dialog", buffer);

    // Reset mediaRecorder after stopping
    setMediaRecorder(null);
    recordedChunks.length = 0; // Clear recorded chunks
  };

  const startButton = () => {
    if (mediaRecorder) {
      mediaRecorder.start();
      setRecording(true);
    } else {
      console.error("MediaRecorder is not initialized during start.");
    }
  };

  const stopButton = () => {
    if (mediaRecorder) {
      console.log(mediaRecorder);
      mediaRecorder.stop();
      setRecording(false);
      sourceRef.current.innerText = "Choose a Video Source";
      videoRef.current.srcObject = null;
    } else {
      console.error("MediaRecorder is not initialized during stop.");
    }
  };

  return (
    <>
      <div className="flex justify-center text-3xl">
        <p>⚡ Nextron ⚡ - Screen Recorder</p>
      </div>
      <div className="flex justify-center ">
        <video ref={videoRef} className="w-[1000px]"></video>
      </div>
      <div className="px-5 space-x-10 flex">
        {recording ? (
          <button
            ref={stopButtonRef}
            onClick={stopButton}
            className="bg-[#FF0000] px-3 py-1 rounded-md flex items-center space-x-2"
          >
            <div className="bg-white rounded-full w-3 h-3" />
            <p>Stop</p>
          </button>
        ) : (
          <button
            onClick={startButton}
            ref={startButtonRef}
            disabled={!mediaRecorder}
            className={`${
              mediaRecorder ? "bg-[#399918]" : "bg-gray-400"
            }  px-3 py-1 rounded-md`}
          >
            Start
          </button>
        )}
        <div className="space-x-3 flex items-center">
          <p>Source:</p>
          <button
            ref={sourceRef}
            onClick={handleSourceSelect}
            className="w-[170px] truncate text-left"
          >
            Choose a Video Source
          </button>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
