import FareCalculator from "./FareCalculate";
import Segment from "./Segment";

export default class OvernigthFareCalculatore implements FareCalculator {
    FARE = 3.90;
    calculate(segment: Segment): number {
        return segment.distance * this.FARE;
    }
}