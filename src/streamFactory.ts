import {map, scan, startWith} from "rxjs/operators";
import {interval} from "rxjs/index";

// better name for var 'pause' is 'interval'
// conventional naming for functions that return streams - getSomeExample$
export function streamFactory(pause, color) {
    return interval(pause)
        .pipe(
            startWith({val:0, seconds:0}),
            map(() => Math.random()),
            scan((acc, val) => {
                const date = new Date();
                const seconds = date.getTime();
                // does every point really needs its own color and shouldRender?
                acc.push({val, seconds, color, shouldRender: true});
                return acc
            }, [])
        );
}