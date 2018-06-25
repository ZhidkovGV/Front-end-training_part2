import {scaleLinear} from "d3-scale";
import {axisBottom, axisLeft} from "d3-axis";
import {svg} from '../index'

export function renderXAxis(renderAxisData) {
    const scale = scaleLinear()
        .domain([100, 0])
        .range([100, 0] as ReadonlyArray<number>);
    const axis = axisBottom(scale).ticks(5);
    svg.append("g").attr("class", "axis-bottom").attr("transform", "translate(0,92)").style("font-size", "2").call(axis);
}
export function renderYAxis (renderAxisData) {
    const scale = scaleLinear()
        .domain([0, 100])
        .range([100, 0] as ReadonlyArray<number>);
    const axis = axisLeft(scale).ticks(4);
    svg.append("g").attr("class","axis-left" ).attr("transform", "translate(0, 0)").style("font-size", "2").call(axis);
}