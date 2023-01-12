import NormalFareCalculator from "../../src/aula02/NormalFareCalculator";
import OvernigthFareCalculatore from "../../src/aula02/OvernightFareCalculator";
import OvernigthSundayFareCalculatore from "../../src/aula02/OvernightSundayFareCalculator";
import Ride from "../../src/aula02/Ride";
import SundayFareCalculator from "../../src/aula02/SundayFareCalculator";

let ride: Ride;

beforeEach(function(){
    const normalFareCalculator = new NormalFareCalculator();
    const overnightFareCalculator = new OvernigthFareCalculatore(normalFareCalculator);
    const sundayFareCalculator = new SundayFareCalculator(overnightFareCalculator);
    const overnightSundayFareCalculator = new OvernigthSundayFareCalculatore(sundayFareCalculator);
    ride = new Ride(overnightSundayFareCalculator);
});

test.skip("Deve calcular uma corrida em hórario normal", function(){
    ride.addSegment(10, new Date("2021-03-10T10:00:00"));
    const fare = ride.calculateFare();
    expect(fare).toBe(21);
});

test.skip("Deve calcular uma corrida em hórario noturno", function(){
    ride.addSegment(10, new Date("2021-03-10T22:00:00"));
    const fare = ride.calculateFare();
    expect(fare).toBe(39);
});

test.skip("Deve calcular uma corrida em hórario no domingo", function(){
    ride.addSegment(10, new Date("2021-03-07T10:00:00"));
    const fare = ride.calculateFare();
    expect(fare).toBe(29);
});

test.skip("Deve calcular uma corrida em hórario no domingo noturno", function(){
    ride.addSegment(10, new Date("2021-03-07T22:00:00"));
    const fare = ride.calculateFare();
    expect(fare).toBe(50);
});

test.skip("Não deve calcular uma corrida com distância invalida", function(){
    expect(() => ride.addSegment(-10, new Date("2021-03-07T22:00:00"))).toThrow(new Error("Invalid Distance"));
});

test.skip("Não deve calcular uma corrida com data invalida", function(){
    expect( () => ride.addSegment(10, new Date("javascript"))).toThrow(new Error("Invalid Date"));
});

test.skip("Deve calcular uma corrida em hórario normal com valor minimo", function(){
    ride.addSegment(3, new Date("2021-03-10T10:00:00"));
    const fare = ride.calculateFare();
    expect(fare).toBe(10);
});