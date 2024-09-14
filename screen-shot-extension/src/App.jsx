import { useState } from "react";
import "./App.css";

function App() {
  const handleSelected = async () => {
    const [tab] = await chrome.tabs.query({
      active: true,
      lastFocusedWindow: true,
    });
    console.log(tab);
    await chrome.tabs.sendMessage(tab.id, {
      action: "captureElement",
    });
  };

  const handleAllPage = async () => {
    const [tab] = await chrome.tabs.query({
      active: true,
      lastFocusedWindow: true,
    });
    console.log(tab);

    await chrome.tabs.sendMessage(tab.id, {
      action: "fullScreenshot",
    });
  };

  const handleVisible = () => {
    chrome.tabs.captureVisibleTab(null, { format: "png" }, function (dataUrl) {
      const link = document.createElement("a");
      link.download = "screenshot.png";
      link.href = dataUrl;
      link.click();
    });
  };
  return (
    <div>
      <button onClick={handleVisible}>Visible Screen Shot</button>
      <button onClick={handleAllPage}>Full Page Screen Shot</button>
      <button onClick={handleSelected}>Selected Screen Shot</button>
    </div>
  );
}

export default App;
