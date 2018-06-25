import {combineLatest, fromEvent} from 'rxjs'
import {distinctUntilChanged, switchMap} from 'rxjs/operators'
import {streamFactory} from "./streamFactory";
import {render} from "./view/render";
import {getColor} from "./randomColorGenerator";
import {of} from "rxjs/internal/observable/of";

const addLine = document.querySelector("button");
const getInterval = document.querySelector("input");

const lines = [];

const draw$ = combineLatest()
    .subscribe((...args) => {
        console.log(args)
    });

const new$ = fromEvent(addLine, 'click');

const data$ = new$.pipe(
    switchMap(() => {
        const pause = parseInt(getInterval.value) || 3000;
        const color = getColor();
        const newStream = streamFactory(pause, color);
        lines.push(newStream);
        return combineLatest(...lines)
    })
);

data$.subscribe((stream) => {
    render(stream)
});

const removeButtons$ = new$.pipe(
    distinctUntilChanged((streamsBef, streamsAfter) => {
        console.log("fuck");
        return streamsAfter.toString() === streamsBef.toString() + 'ff'
    })
);

removeButtons$.subscribe((streams) => {
   console.log(streams)
});