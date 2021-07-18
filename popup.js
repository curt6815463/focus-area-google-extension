const { fromEvent } = rxjs;
const selectButton = document.querySelector(".selectButton");
const fillButton = document.querySelector(".fillButton");
const clearButton = document.querySelector(".clearButton");

let hollowStyleData = { x1: 0, y1: 0, x2: 0, y2: 0 };

const selectFocusArea = () => {
  const { fromEvent } = rxjs;
  const { switchMap, tap, takeUntil, map } = rxjs.operators;
  let canvas = document.querySelector(".focus-area-canvas");
  if (canvas) return;

  canvas = document.createElement("canvas");
  canvas.className = "focus-area-canvas";
  const context = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  document.body.appendChild(canvas);

  const mousedown$ = fromEvent(canvas, "mousedown");
  const mousemove$ = fromEvent(canvas, "mousemove");
  const mouseup$ = fromEvent(canvas, "mouseup");

  const drawHintOnCanvas = () => {
    context.beginPath();
    context.strokeStyle = "red";
    context.lineWidth = 10;
    context.setLineDash([]);
    context.strokeRect(0, 0, canvas.width, canvas.height);
    context.closePath();
  };

  const drawSelectedAreaOnCanvas = ({
    canvas,
    context,
    startX,
    startY,
    endX,
    endY,
  }) => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawHintOnCanvas();
    context.beginPath();
    context.strokeStyle = "black";
    context.setLineDash([10, 10]);
    context.lineWidth = 1;
    context.strokeRect(startX, startY, endX - startX, endY - startY);
    context.closePath();
  };

  const clearCanvasFully = ({ canvas, context }) =>
    context.clearRect(0, 0, canvas.width, canvas.height);

  const startDrag$ = mousedown$.pipe(
    tap(() => clearCanvasFully({ canvas, context })),
    tap(() => drawHintOnCanvas())
  );

  const formatHollowStyleData = ({ mousedownEvent, mousemoveEvent }) => {
    const x1 = Math.min(mousedownEvent.offsetX, mousemoveEvent.offsetX);
    const y1 = Math.min(mousedownEvent.offsetY, mousemoveEvent.offsetY);
    const x2 = Math.max(mousedownEvent.offsetX, mousemoveEvent.offsetX);
    const y2 = Math.max(mousedownEvent.offsetY, mousemoveEvent.offsetY);
    return { x1, y1, x2, y2 };
  };

  const getDraggingAndDrop$ = (mousedownEvent) =>
    mousemove$.pipe(
      tap((mousemoveEvent) => {
        drawSelectedAreaOnCanvas({
          canvas,
          context,
          startX: mousedownEvent.offsetX,
          startY: mousedownEvent.offsetY,
          endX: mousemoveEvent.offsetX,
          endY: mousemoveEvent.offsetY,
        });
      }),
      map((mousemoveEvent) =>
        formatHollowStyleData({ mousedownEvent, mousemoveEvent })
      ),
      takeUntil(mouseup$)
    );

  drawHintOnCanvas();
  startDrag$.pipe(switchMap(getDraggingAndDrop$)).subscribe((data) => {
    window.hollowStyleData = data;
  });
};

fromEvent(selectButton, "click").subscribe(async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: selectFocusArea,
  });
});

const fillCover = () => {
  const { x1, x2, y1, y2 } = hollowStyleData;
  let coverWrapper = document.querySelector(".focus-area-cover-wrapper");
  if (coverWrapper) return;

  coverWrapper = document.createElement("div");
  coverWrapper.className = "focus-area-cover-wrapper";
  document.body.appendChild(coverWrapper);
  coverWrapper.innerHTML = `
  <div class='focus-area-cover-one'></div>
  <div class='focus-area-cover-two'></div>
  <div class='focus-area-hollow'></div>
  <div class='focus-area-cover-three'></div>
  <div class='focus-area-cover-four'></div>
  `;
  coverWrapper.style.gridTemplateColumns = `${x1}px ${x2 - x1}px ${
    innerWidth - x2
  }px`;
  coverWrapper.style.gridTemplateRows = `${y1}px ${y2 - y1}px ${
    innerHeight - y2
  }px`;

  const canvas = document.querySelector(".focus-area-canvas");
  document.body.removeChild(canvas);
};

fromEvent(fillButton, "click").subscribe(async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: fillCover,
  });
});

const clearAll = () => {
  const canvas = document.querySelector(".focus-area-canvas");
  const coverWrapper = document.querySelector(".focus-area-cover-wrapper");
  canvas && document.body.removeChild(canvas);
  coverWrapper && document.body.removeChild(coverWrapper);
};

fromEvent(clearButton, "click").subscribe(async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: clearAll,
  });
});
