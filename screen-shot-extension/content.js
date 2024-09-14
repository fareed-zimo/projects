import html2canvas from "html2canvas";
import interact from "interactjs";

chrome.runtime.onMessage.addListener(async function (
  request,
  sender,
  sendResponse
) {
  if (request.action === "fullScreenshot") {
    html2canvas(document.body).then(function (canvas) {
      const dataURL = canvas.toDataURL("image/png", 1.0);
      const link = document.createElement("a");
      link.download = "screenshot.png";
      link.href = dataURL;
      link.click();
    });
    sendResponse({ message: "success" });
  }

  if (request.action === "captureElement") {
    const existingDiv = document.getElementById("my-injected-div");
    const existingOverlayDiv = document.getElementById("my-overlay-div");
    if (existingDiv) {
      existingDiv.remove();
    }
    if (existingOverlayDiv) {
      existingOverlayDiv.remove();
    }

    const div = document.createElement("div");
    div.id = "my-injected-div";
    div.style.position = "absolute";
    div.className = "resize-drag";
    div.style.top = `${window.scrollY}px`;
    div.style.left = `${window.scrollX}px`;
    div.style.width = "200px";
    div.style.height = "100px";
    div.style.backgroundColor = "transparent";
    div.style.border = "2px dashed #EE4B2B";
    div.style.overflow = "auto";
    div.style.cursor = "move";
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.justifyContent = "space-between";
    div.style.zIndex = "9999";

    const overlayDiv = document.createElement("div");
    overlayDiv.id = "my-overlay-div";
    overlayDiv.style.position = "absolute";
    overlayDiv.style.top = "0px";
    overlayDiv.style.left = "0px";
    overlayDiv.style.width = `${document.documentElement.scrollWidth}px`;
    overlayDiv.style.height = `${document.documentElement.scrollHeight}px`;
    overlayDiv.style.backgroundColor = "black";
    overlayDiv.style.opacity = "0.2";
    overlayDiv.style.zIndex = "9000";

    const button = document.createElement("button");
    button.innerText = "✓";
    button.style.paddingLeft = "5px";
    button.style.paddingRight = "5px";
    button.style.fontWeight = "bold";
    button.style.fontSize = "20px";
    button.style.backgroundColor = "white";
    button.style.border = "none";
    button.style.cursor = "pointer";
    button.style.borderRadius = "5px";
    button.style.margin = "10px";
    button.style.userSelect = "none";
    button.style.alignSelf = "flex-end";
    button.style.zIndex = "10000";

    button.addEventListener("click", () => {
      div.style.zIndex = "-1";
      div.style.border = "0px";
      button.remove();
      overlayDiv.remove();
      const rect = div.getBoundingClientRect();
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;

      html2canvas(document.body, {
        backgroundColor: null,
        x: rect.x + scrollX,
        y: rect.y + scrollY,
        width: rect.width,
        height: rect.height,
      }).then((canvas) => {
        const dataURL = canvas.toDataURL("image/png", 1.0);
        const link = document.createElement("a");
        link.download = "screenshot.png";
        link.href = dataURL;
        link.click();
      });
      div.remove();
    });

    document.body.appendChild(div);
    document.body.appendChild(overlayDiv);
    div.appendChild(button);

    const updateOverlayClipPath = () => {
      const rect = div.getBoundingClientRect();
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;

      overlayDiv.style.clipPath = `polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, ${
        rect.left + scrollX
      }px ${rect.top + scrollY}px, ${rect.left + scrollX}px ${
        rect.top + rect.height + scrollY
      }px, ${rect.left + rect.width + scrollX}px ${
        rect.top + rect.height + scrollY
      }px, ${rect.left + rect.width + scrollX}px ${rect.top + scrollY}px, ${
        rect.left + scrollX
      }px ${rect.top + scrollY}px)`;
    };

    updateOverlayClipPath();

    function dragMoveListener(event) {
      var target = event.target;
      // keep the dragged position in the data-x/data-y attributes
      var x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
      var y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

      // translate the element
      target.style.transform = "translate(" + x + "px, " + y + "px)";

      // update the posiion attributes
      target.setAttribute("data-x", x);
      target.setAttribute("data-y", y);
      updateOverlayClipPath();
    }

    // this function is used later in the resizing and gesture demos
    window.dragMoveListener = dragMoveListener;

    interact(".resize-drag")
      .resizable({
        // resize from all edges and corners
        edges: { left: true, right: true, bottom: true, top: true },

        listeners: {
          move(event) {
            var target = event.target;
            var x = parseFloat(target.getAttribute("data-x")) || 0;
            var y = parseFloat(target.getAttribute("data-y")) || 0;

            // update the element's style
            target.style.width = event.rect.width + "px";
            target.style.height = event.rect.height + "px";

            // translate when resizing from top or left edges
            x += event.deltaRect.left;
            y += event.deltaRect.top;

            target.style.transform = "translate(" + x + "px," + y + "px)";

            target.setAttribute("data-x", x);
            target.setAttribute("data-y", y);
            target.textContent =
              Math.round(event.rect.width) +
              "\u00D7" +
              Math.round(event.rect.height);
            div.appendChild(button);

            updateOverlayClipPath();
          },
        },
        modifiers: [
          // keep the edges inside the parent
          interact.modifiers.restrictEdges({
            outer: "parent",
          }),

          // minimum size
          interact.modifiers.restrictSize({
            min: { width: 100, height: 50 },
          }),
        ],

        inertia: true,
      })
      .draggable({
        listeners: { move: window.dragMoveListener },
        inertia: true,
        modifiers: [
          interact.modifiers.restrictRect({
            restriction: "parent",
            endOnly: true,
          }),
        ],
      });
  }
});
