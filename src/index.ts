import {combineLatest, fromEvent} from 'rxjs'
import {distinctUntilChanged, share, switchMap} from 'rxjs/operators'
import {getNew$} from "./getNew$";
import {render} from "./view/render";
import {getColor} from "./randomColorGenerator";
import {renderRemoveButtons} from "./view/renderRemoveButtons";

const addLine = document.querySelector(".start-stream-with-interval");
const getInterval = document.querySelector(".input-interval") as HTMLInputElement;

const lines = [];

const addNew$ = fromEvent(addLine, 'click');

const data$ = addNew$.pipe(
    switchMap(() => {
        const pause = (parseInt(getInterval.value) || 3000);
        const color = getColor();
        const newStream = getNew$(pause, color);
        lines.push(newStream);
        return combineLatest(...lines)
    }),
    share()
);

const removeButtons$ = data$.pipe(
    distinctUntilChanged(($Bef, $After) => {
        return $Bef["length"] === $After["length"]
    })
);

data$.subscribe((stream) => {
    render(stream);
});

removeButtons$.subscribe((stream) => {
   renderRemoveButtons(stream);
});