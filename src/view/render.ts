 import {renderXAxis, renderYAxis} from "./renderAxes";
import {renderLine} from "./renderLine";
import {select} from "d3-selection";
import {countScale} from "./countScales";

export const svg = select("svg");

export function render(lines: Array<any>) {
    svg.selectAll("*").remove();
    const xScale = countScale(lines, 'x');
    const yScale = countScale(lines, 'y');
    renderYAxis(yScale);
    renderXAxis(xScale);
    lines.forEach((line) => {
        if (line[0].shouldRender) renderLine(line, xScale as any, yScale as any);
    });
}