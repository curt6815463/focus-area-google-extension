handleCoverListener = () => {
  const { fromEvent } = rxjs;
  const { switchMap, takeUntil } = rxjs.operators;
  const coverWrapper = document.querySelector(".focus-area-cover-wrapper");
  fromEvent(coverWrapper, "click").subscribe(() => {
    const hollow = document.querySelector(".focus-area-hollow");
    hollow.style.border = "3px dashed red";
    hollow.style.cursor = "grab";
    hollow.style.pointerEvents = "auto";

    const mousedown$ = fromEvent(hollow, "mousedown");
    const mousemove$ = fromEvent(hollow, "mousemove");
    const mouseup$ = fromEvent(hollow, "mouseup");

    const startDrag$ = mousedown$
      .pipe(
        switchMap(() => {
          return mousemove$.pipe(takeUntil(mouseup$));
        })
      )
      .subscribe((e) => {
        console.log("e", e);
      });
  });
};
