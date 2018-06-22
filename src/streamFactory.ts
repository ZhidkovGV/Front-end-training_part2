import {map, scan} from "rxjs/operators";
import {interval} from "rxjs/index";

export function streamFactory(pause, color) {
    return interval(pause)
        .pipe(
            map(() => Math.random()),
            scan((acc, val) => {
                const date = new Date();
                const seconds = date.getSeconds();
                acc.push({val, seconds, color});
                return acc
            }, [])
        );
}