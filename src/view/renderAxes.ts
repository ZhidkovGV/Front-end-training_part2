import {axisBottom, axisLeft} from "d3-axis";
import {svg} from './render'

export function renderXAxis(scale) {
        const axis = axisBottom(scale).ticks(5);
    svg.append("g").attr("class", "axis-bottom").attr("transform", "translate(0,0)").call(axis);
}
export function renderYAxis (scale) {
    const axis = axisLeft(scale).ticks(4);
    svg.append("g").attr("class","axis-left" ).attr("transform", "translate(0, 0)").call(axis);
}