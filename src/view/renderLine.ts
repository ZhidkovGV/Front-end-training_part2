import {line} from "d3-shape";
import {svg} from "./render";

export function renderLine(lineData: Array<any>, xScale: Function, yScale: Function) {
    const graph = line()
        .x((point) => xScale(point["seconds"]))
        .y((point) => yScale(point["val"]));

    svg.append('svg:path').attr("class", "line")
        .attr('style', `stroke: ${lineData[0].color}`)
        .attr("id", `color${lineData[0].color}`)
        .attr("d", graph(lineData))
    }