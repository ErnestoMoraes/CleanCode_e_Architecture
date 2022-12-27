import Ride from "../../../src/aula02/Ride";

test("Deve calcular uma corrida em hórario normal", function(){
    const ride = new Ride();
    ride.addSegment(10, new Date("2021-03-10T10:00:00"));
    const fare = ride.calculateFare();
    expect(fare).toBe(21);
});

test("Deve calcular uma corrida em hórario noturno", function(){
    const ride = new Ride();
    ride.addSegment(10, new Date("2021-03-10T22:00:00"));
    const fare = ride.calculateFare();
    expect(fare).toBe(39);
});

test("Deve calcular uma corrida em hórario no domingo", function(){
    const ride = new Ride();
    ride.addSegment(10, new Date("2021-03-07T10:00:00"));
    const fare = ride.calculateFare();
    expect(fare).toBe(29);
});

test("Deve calcular uma corrida em hórario no domingo noturno", function(){
    const ride = new Ride();
    ride.addSegment(10, new Date("2021-03-07T22:00:00"));
    const fare = ride.calculateFare();
    expect(fare).toBe(50);
});

test("Não deve calcular uma corrida com distância invalida", function(){
    const ride = new Ride();
    expect(() => ride.addSegment(-10, new Date("2021-03-07T22:00:00"))).toThrow(new Error("Invalid Distance"));
});

test("Não deve calcular uma corrida com data invalida", function(){
    const ride = new Ride();
    expect( () => ride.addSegment(10, new Date("javascript"))).toThrow(new Error("Invalid Date"));
});

test("Deve calcular uma corrida em hórario normal com valor minimo", function(){
    const ride = new Ride();
    ride.addSegment(3, new Date("2021-03-10T10:00:00"));
    const fare = ride.calculateFare();
    expect(fare).toBe(10);
});