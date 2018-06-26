// overall comment: most of your functions are not strongly typed. please, type 'implicit any' cases
// you can use 'noImplicitAny' typescript flag to find out where there are weak types

import {combineLatest, fromEvent} from 'rxjs'
import {distinctUntilChanged, share, switchMap} from 'rxjs/operators'
import {streamFactory} from "./streamFactory";
import {render} from "./view/render";
import {getColor} from "./randomColorGenerator";
import {renderRemoveButtons} from "./view/renderRemoveButtons";

// use some classes that indicate elements purpose
const addLine = document.querySelector("button");
const getInterval = document.querySelector("input");

const lines = [];
const draw$ = combineLatest()
    .subscribe((...args) => {
        console.log(args)
    });

const addNew$ = fromEvent(addLine, 'click');

const data$ = addNew$.pipe(
    switchMap(() => {
        const pause = parseInt(getInterval.value) || 3000;
        const color = getColor();
        const newStream = streamFactory(pause, color);
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