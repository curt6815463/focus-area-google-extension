const handleCoverListener = () => {
  const { fromEvent } = rxjs;
  const { switchMap, takeUntil, tap, throttleTime, merge } = rxjs.operators;
  const coverWrapper = document.querySelector(".focus-area-cover-wrapper");
  fromEvent(coverWrapper, "click").subscribe(() => {
    const hollow = document.querySelector(".focus-area-hollow");
    hollow.style.border = "3px dashed red";
    hollow.style.cursor = "grab";
    hollow.style.pointerEvents = "auto";

    const mousedown$ = fromEvent(hollow, "mousedown");
    const mousemove$ = fromEvent(hollow, "mousemove");
    const mouseup$ = fromEvent(hollow, "mouseup");
    const mouseleave$ = fromEvent(hollow, "mouseleave");
    const cancelDrag$ = mouseup$.pipe(merge(mouseleave$));

    const mapGridTemplateData = ({
      elementOffsetX,
      elementOffsetY,
      mousedownEvent,
      mousemoveEvent,
    }) => {
      const startX = mousedownEvent.clientX;
      const movedX = mousemoveEvent.clientX;
      const startY = mousedownEvent.clientY;
      const movedY = mousemoveEvent.clientY;

      const moveOffsetX = movedX - startX;
      const moveOffsetY = movedY - startY;

      const columnOneLength = Math.min(
        Math.max(0, moveOffsetX + elementOffsetX),
        window.innerWidth - hollow.offsetWidth
      );
      const columnTwoLength = hollow.offsetWidth;

      const rowOneLength = Math.min(
        Math.max(0, moveOffsetY + elementOffsetY),
        window.innerHeight - hollow.offsetHeight
      );
      const rowTwoLength = hollow.offsetHeight;
      return {
        columnOneLength,
        columnTwoLength,
        rowOneLength,
        rowTwoLength,
      };
    };

    const startDrag$ = mousedown$
      .pipe(
        switchMap((mousedownEvent) => {
          const elementOffsetX = hollow.offsetLeft;
          const elementOffsetY = hollow.offsetTop;
          return mousemove$.pipe(
            throttleTime(10),
            map((mousemoveEvent) =>
              mapGridTemplateData({
                elementOffsetX,
                elementOffsetY,
                mousedownEvent,
                mousemoveEvent,
              })
            ),
            takeUntil(cancelDrag$)
          );
        })
      )
      .subscribe(
        ({ columnOneLength, columnTwoLength, rowOneLength, rowTwoLength }) => {
          coverWrapper.style.gridTemplateColumns = `${columnOneLength}px ${columnTwoLength}px 1fr`;
          coverWrapper.style.gridTemplateRows = `${rowOneLength}px ${rowTwoLength}px 1fr`;
        }
      );
  });
};
