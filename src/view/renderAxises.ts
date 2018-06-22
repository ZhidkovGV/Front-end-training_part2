import {scaleLinear} from "d3-scale";
import {axisBottom, axisLeft} from "d3-axis";
import {svg} from '../index'

export function renderXAxis() {
    const scale = scaleLinear()
        .domain([100, 0])
        .range([100, 0] as ReadonlyArray<number>);
    const axis = axisBottom(scale).ticks(5);
    svg.append("g").attr("transform", "translate(16,88)").style("font-size", "2").call(axis);
}
export function renderYAxis () {
    const scale = scaleLinear()
        .domain([0, 100])
        .range([100, 0] as ReadonlyArray<number>);
    const axis = axisLeft(scale).ticks(4);
    svg.append("g").attr("transform", "translate(15, 3)").style("font-size", "2").call(axis);
}