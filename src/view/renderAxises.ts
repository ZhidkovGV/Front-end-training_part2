import {scaleLinear} from "d3-scale";
import {axisBottom, axisLeft} from "d3-axis";
import {svg} from './render'

export function renderXAxis(renderAxisData, scale) {
    const axis = axisBottom(scale).ticks(5);
    svg.append("g").attr("class", "axis-bottom").attr("transform", "translate(0,100)").style('font-size', '2px').call(axis);
}
export function renderYAxis (renderAxisData, scale) {
    const axis = axisLeft(scale).ticks(4);
    svg.append("g").attr("class","axis-left" ).attr("transform", "translate(0, 0)").style('font-size', '2px').call(axis);
}