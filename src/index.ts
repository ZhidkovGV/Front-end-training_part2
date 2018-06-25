import {combineLatest, fromEvent} from 'rxjs'
import {switchMap} from 'rxjs/operators'
import {streamFactory} from "./streamFactory";
import {render} from "./view/render";
import {getColor} from "./randomColorGenerator";

const addLine = document.querySelector("button");
const getInterval = document.querySelector("input");

const lines = [];

const drawStream = combineLatest()
    .subscribe((...args) => {
        console.log(args)
    });

const newStreamAdded = fromEvent(addLine,'click')
    .pipe(
        switchMap(() => {
            const pause = parseInt(getInterval.value) || 3000;
            const color = getColor();
            const newStream = streamFactory(pause, color);
            lines.push(newStream);
            return combineLatest(...lines)
        })
    );

newStreamAdded.subscribe((stream) => {
    render(stream)
});