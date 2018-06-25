import {combineLatest, fromEvent} from 'rxjs'
import {distinctUntilChanged, switchMap} from 'rxjs/operators'
import {streamFactory} from "./streamFactory";
import {render} from "./view/render";
import {getColor} from "./randomColorGenerator";

const addLine = document.querySelector("button");
const getInterval = document.querySelector("input");

const lines = [];

const draw$ = combineLatest()
    .subscribe((...args) => {
        console.log(args)
    });

const new$ = fromEvent(addLine, 'click')
    .pipe(
        switchMap(() => {
            const pause = parseInt(getInterval.value) || 3000;
            const color = getColor();
            const newStream = streamFactory(pause, color);
            lines.push(newStream);
            return combineLatest(...lines)
        })
    );
const removeButtons$ = new$.pipe(
    distinctUntilChanged((streams) => streams.length)
);
new$.subscribe((stream) => {
    render(stream)
});
removeButtons$.subscribe((streams) => {
   console.log(streams)
});