import {scaleLinear} from "d3-scale";
import {max, min} from "d3-array";
const svg = document.querySelector('svg');

export function countXScale(lines) {
    const width = parseInt(getComputedStyle(svg).width) - 100;
    return scaleLinear().domain(
        [min(lines, (line) => min(line as Array<any>, (point) => point.seconds)),
            max(lines, (line) => max(line as Array<any>, (point) => point.seconds))] as Array<any>
    ).range([0, width] as ReadonlyArray<any>);
}

export function countYScale(lines) {
    const height = parseInt(getComputedStyle(svg).height) - 50;
    return scaleLinear().domain(
        [min(lines, (line) => min(line as Array<any>, (point) => point.val)),
            max(lines, (line) => max(line as Array<any>, (point) => point.val))] as Array<any>
    ).range([0, height] as any);
}