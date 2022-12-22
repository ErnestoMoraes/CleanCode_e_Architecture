import Segment from "./Segment";

export default class Ride {
    OVERNIGTH_FARE = 3.90;
    OVERNIGTH_SUNDAY_FARE = 5;
    SUNDAY_FARE = 2.90;
    NORMAL_FARE = 2.10;
    MIN_FARE = 10;

    private segments: Segment[];

    constructor() {
        this.segments = [];
    }

    addSegment (distance: number, date: Date) {
        this.segments.push(new Segment(distance, date));
    }

    calculateFare() {
        let fare = 0;
        for (const segment of this.segments) {
            if(segment.isOvernight() && !segment.isSunday()) {
            fare += segment.distance * this.OVERNIGTH_FARE;
            }
            if(segment.isOvernight() && segment.isSunday()) {
                fare += segment.distance * this.OVERNIGTH_SUNDAY_FARE;
            }
            if(!segment.isOvernight() && segment.isSunday()) {
                fare += segment.distance * this.SUNDAY_FARE
            }
            if(!segment.isOvernight() && !segment.isSunday()) {
                fare += segment.distance * this.NORMAL_FARE;
            }
        }
        return (fare < this.MIN_FARE) ? this.MIN_FARE : fare;
    }
}