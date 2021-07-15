const { fromEvent } = rxjs;
const { switchMap, tap, takeUntil } = rxjs.operators;

const selectButton = document.querySelector(".selectButton");

const selectFocusArea = () => {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  document.body.appendChild(canvas);

  const mousedown$ = fromEvent(canvas, "mousedown");
  const mousemove$ = fromEvent(canvas, "mousemove");
  const mouseup$ = fromEvent(canvas, "mouseup");

  const drawSelectedAreaOnCanvas = ({
    canvas,
    context,
    startX,
    startY,
    endX,
    endY,
  }) => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.strokeStyle = "black";
    context.setLineDash([10, 10]);
    context.lineWidth = 1;
    context.strokeRect(startX, startY, endX - startX, endY - startY);
    context.closePath();
  };

  const clearCanvasFully = ({ canvas, context }) =>
    context.clearRect(0, 0, canvas.width, canvas.height);

  const startDragObservable = mousedownEvent.pipe(
    tap(() => clearCanvasFully({ canvas, context }))
  );

  const getDraggingAndDropObservable = (mousedownEvent) =>
    mousemove$.pipe(
      tap((mousemoveEvent) => {
        drawSelectedAreaOnCanvas({
          canvas,
          context,
          startX: mousedownEvent.offsetX,
          startY: mousedownEvent.offsetY,
          endX: mousemoveEvent.offsetY,
          endY: mousemoveEvent.offsetY,
        });
      }),
      takeUntil(mouseup$)
    );

  startDragObservable.pipe(switchMap(getDraggingAndDropObservable)).subscribe();
};

fromEvent(selectButton, "click").subscribe(async () => {
  // const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  // chrome.scripting.executeScript({
  //   target: { tabId: tab.id },
  //   function: selectFocusArea,
  // });
  selectFocusArea();
});
