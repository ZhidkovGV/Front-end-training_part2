import {renderXAxis, renderYAxis} from "./renderAxises";
import {renderLine} from "./renderLine";
import {scaleLinear} from "d3-scale";
import {min, max} from "d3-array";
import {svg} from "../index";

export function render(lines) {
    svg.selectAll("*").remove();
    const xScale = scaleLinear().domain(
        [min(lines, (item) => item["seconds"]),
         max(lines, (item) => item["seconds"])] as Array<any>
    ).range([0, 1] as any);
    const yScale = scaleLinear().domain(
        [min(lines, (item) => item["val"]),
            max(lines, (item) => item["val"])] as Array<any>
    ).range([0, 100] as any);
    console.log(xScale({seconds:5} as any), yScale({val:20} as any));
    renderYAxis(lines);
    renderXAxis(lines);
    lines.forEach((line) => {
        console.log(line);
        renderLine(line)
    })
}

export function initialRender() {
    renderXAxis([]);
    renderYAxis([]);
}