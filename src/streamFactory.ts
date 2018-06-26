import {map, scan, startWith} from "rxjs/operators";
import {interval} from "rxjs/index";

export function streamFactory(pause, color) {
    return interval(pause)
        .pipe(
            startWith({val:0, seconds:0}),
            map(() => Math.random()),
            scan((acc, val) => {
                const date = new Date();
                const seconds = date.getTime();
                acc.push({val, seconds, color, shouldRender: true});
                return acc
            }, [])
        );
}