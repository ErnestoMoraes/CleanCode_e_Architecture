import FareCalculator from "./FareCalculate";
import Segment from "./Segment";

export default class OvernigthSundayFareCalculatore implements FareCalculator {
    FARE = 5;
    calculate(segment: Segment): number {
        return segment.distance * this.FARE;
    }
}