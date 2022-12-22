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

export function calculateRide (segments: { distance: number; date: Date; }[]) {
    let fare = 0;
    for (const segment of segments) {
        if(!segment.distance || typeof segment.distance !== "number" || segment.distance < 0) return -1;
        if(!segment.date || !(segment.date instanceof Date) || segment.date.toString() === "Invalid Date") return -2;
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