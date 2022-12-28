// import NormalFareCalculator from "./NormalFareCalculator";
// import OvernigthFareCalculatore from "./OvernightFareCalculator";
// import OvernigthSundayFareCalculatore from "./OvernightSundayFareCalculator copy";
// import Segment from "./Segment";
// import SundayFareCalculator from "./SundayFareCalculator";

// export default class FareCalculatorFactory {
//     static create (segment: Segment) {
//         if(segment.isOvernight() && !segment.isSunday()) {
//             return new OvernigthFareCalculatore();
//         }
//         if(segment.isOvernight() && segment.isSunday()) {
//             return new OvernigthSundayFareCalculatore(); 
//         }
//         if(!segment.isOvernight() && segment.isSunday()) {
//             return new SundayFareCalculator();
//         }
//         if(!segment.isOvernight() && !segment.isSunday()) {
//             return new NormalFareCalculator();
//         }
//         throw new Error("");
//     }
// }