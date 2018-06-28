import {scaleLinear} from "d3-scale";
import {max, min} from "d3-array";
const svg = document.querySelector('svg');

export function countScale(lines, axis) {
    const width = parseInt(getComputedStyle(svg).width) - parseInt(getComputedStyle(svg).paddingLeft);
    const height = parseInt(getComputedStyle(svg).height);

    return scaleLinear().domain(
            [min(lines, (line) => min(line as Array<any>, (point) => axis === 'x' ? point.seconds : point.val)),
            max(lines, (line) => max(line as Array<any>, (point) => axis === 'x' ? point.seconds : point.val))] as Array<any>
    ).range([0, axis === 'x' ? width : height] as ReadonlyArray<any>);
}