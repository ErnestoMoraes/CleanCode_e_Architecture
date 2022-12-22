export default class Segment {
    OVERNIGTH_START = 22;
    OVERNIGTH_END = 6;

    constructor(readonly distance: number, readonly date: Date) {
        if(!this.isValidDistance(distance)) throw new Error("Invalid Distance");
        if(!this.isValidDate(date)) throw new Error("Invalid Date");
    }

    isValidDistance(distance: number) {
        return distance && typeof distance === "number" && distance > 0;
    }

    isValidDate(date:  Date ) {
        return date && date instanceof Date && date.toString() !== "Invalid Date";
    }

    isOvernight() {
        return this.date.getHours() >= this.OVERNIGTH_START || this.date.getHours() <= this.OVERNIGTH_END;
    }
    isSunday() {
        return this.date.getDay() === 0;
    }
}