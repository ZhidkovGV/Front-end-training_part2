import {interval, combineLatest} from 'rxjs'
import {map} from 'rxjs/operators'
import * as d3 from 'd3'

const firstLineStream = interval(3000).pipe(map(() => Math.random()));
const secondLineStream = interval(3000).pipe(map(() => Math.random()));
const thirdLineStream = interval(3000).pipe(map(() => Math.random()));
const svg = d3.select("svg");

const renderYAxis = () => {
    const scale = d3.scaleLinear()
        .domain([0, 100])
        .range([100, 0]);
    const axis = d3.axisLeft().scale(scale);
    svg.append("g").attr("transform", "translate(25, 5)").attr("font-size", "2").call(axis);
};

renderYAxis();

const renderXAxis = () => {

};

const render = (lines) => {

};

const drawStream = combineLatest(firstLineStream, secondLineStream, thirdLineStream)
    .subscribe((...args) => {
        render(args)
    });
setTimeout(() => drawStream.unsubscribe(),20000);