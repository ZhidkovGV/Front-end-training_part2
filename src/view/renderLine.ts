import {line} from "d3-shape";
import {svg} from "../index";
import {scaleLinear} from "d3-scale";
import {min, max} from "d3-array";

export function renderLine(lineData) {

    const xScale = scaleLinear().domain([0, 60]).range([100, 0] as any);
    const yScale = scaleLinear().domain([0, 1]).range([100,0] as any);

    const graph = line()
        .x((point) => xScale(point["seconds"]))
        .y((point) => yScale(point["val"]));

    svg.append('svg:path').attr("class", "line")
        .attr('style', `stroke: ${lineData[0].color}`)
        .attr("d", graph(lineData))
    }