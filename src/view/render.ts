import {renderXAxis, renderYAxis} from "./renderAxises";
import {renderLine} from "./renderLine";
import {select} from "d3-selection";
import {countXScale, countYScale} from "./countScales";

export const svg = select("svg");

export function render(lines) {
    svg.selectAll("*").remove();
    const xScale = countXScale(lines);
    const yScale = countYScale(lines);
    renderYAxis(lines, yScale);
    renderXAxis(lines, xScale);
    lines.forEach((line) => {
        if (line[0].shouldRender) renderLine(line, xScale, yScale);
    })
}