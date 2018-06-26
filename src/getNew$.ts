import {map, scan, startWith} from "rxjs/operators";
import {interval} from "rxjs/index";

export function getNew$($interval, color) {
    return interval($interval)
        .pipe(
            startWith({val: 0, seconds: 0}),
            map(() => Math.random()),
            scan((acc, val) => {
                const date = new Date();
                const seconds = date.getTime();
                acc.push(acc.length > 1 ? {val, seconds} : {val, seconds, color, shouldRender: true});
                return acc
            }, [])
        );
}