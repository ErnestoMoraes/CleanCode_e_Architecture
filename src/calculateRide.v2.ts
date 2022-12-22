const OVERNIGTH_FARE = 3.90;
const OVERNIGTH_SUNDAY_FARE = 5;
const SUNDAY_FARE = 2.90;
const NORMAL_FARE = 2.10;
const OVERNIGTH_START = 22;
const OVERNIGTH_END = 6;
const MIN_FARE = 10;

function isOvernight(date: Date) {
    return date.getHours() >= OVERNIGTH_START || date.getHours() <= OVERNIGTH_END;
}
function isSunday(date: Date) {
    return date.getDay() === 0;
}
function isValidDistance(distance: number) {
    return distance && typeof distance === "number" && distance > 0;
}
function isValidDate(date:  Date ) {
    return date && date instanceof Date && date.toString() !== "Invalid Date";
}

export function calculateRideV2 (segments: { distance: number; date: Date; }[]) {
    let fare = 0;
    for (const segment of segments) {
        if(!isValidDistance(segment.distance)) throw new Error("Invalid Distance");
        if(!isValidDate(segment.date)) throw new Error("Invalid Date");
        if(isOvernight(segment.date) && !isSunday(segment.date)) {
           fare += segment.distance * OVERNIGTH_FARE;
        }
        if(isOvernight(segment.date) && isSunday(segment.date)) {
            fare += segment.distance * OVERNIGTH_SUNDAY_FARE;
        }
        if(!isOvernight(segment.date) && isSunday(segment.date)) {
            fare += segment.distance * SUNDAY_FARE
        }
        if(!isOvernight(segment.date) && !isSunday(segment.date)) {
            fare += segment.distance * NORMAL_FARE;
        }
    }
    return (fare < MIN_FARE) ? MIN_FARE : fare;
}