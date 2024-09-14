export const renderPredictions = async (detectedObjects, context) => {
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);

  //font
  const font = "16px sans-serif";
  context.font = font;
  context.textBaseline = "top";

  for (const object of detectedObjects) {
    const [x, y, width, height] = object["bbox"];

    const isPerson = object.class === "person"; // Corrected 'prediction' to 'object'

    if (object.class === "person") {
      object.class = "bad person";
    }

    //bounding box
    context.strokeStyle = isPerson ? "#FF0000" : "#00FFFF";
    context.lineWidth = 4;
    context.strokeRect(x, y, width, height);

    //fill color
    context.fillStyle = `rgba(255, 0, 0, ${isPerson ? 0.2 : 0})`; // Set the fill
    context.fillRect(x, y, width, height);

    //Draw label background
    context.fillStyle = isPerson ? "#FF0000" : "#00FFFF";
    const textWidth = context.measureText(object.class).width;
    const textHeight = parseInt(font, 10); // base 10
    context.fillRect(x, y, textWidth + 4, textHeight + 4);

    context.fillStyle = "#000000";
    context.fillText(object.class, x, y);
  }
};
