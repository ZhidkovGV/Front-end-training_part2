import {interval, combineLatest} from 'rxjs'
import {map} from 'rxjs/operators'
import * as d3 from 'd3'

const firstLineStream = interval(3000).pipe(map(() => Math.random()));
const secondLineStream = interval(3000).pipe(map(() => Math.random()));
const thirdLineStream = interval(3000).pipe(map(() => Math.random()));

const renderAxis = () => {

};
const render = (lines) => {

};
const drawStream = combineLatest(firstLineStream, secondLineStream, thirdLineStream)
    .subscribe((...args) => {
        render(args)
    });
setTimeout(() => drawStream.unsubscribe(),20000);