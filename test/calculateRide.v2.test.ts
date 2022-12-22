import { calculateRideV2 } from "../src/calculateRide.v2";

test("Deve calcular uma corrida em hórario normal", function(){
    const fare = calculateRideV2([{ distance: 10, date: new Date("2021-03-10T10:00:00") }]);
    expect(fare).toBe(21);
});

test("Deve calcular uma corrida em hórario noturno", function(){
    const fare = calculateRideV2([{ distance: 10, date: new Date("2021-03-10T22:00:00") }]);
    expect(fare).toBe(39);
});

test("Deve calcular uma corrida em hórario no domingo", function(){
    const fare = calculateRideV2([{ distance: 10, date: new Date("2021-03-07T10:00:00") }]);
    expect(fare).toBe(29);
});

test("Deve calcular uma corrida em hórario no domingo noturno", function(){
    const fare = calculateRideV2([{ distance: 10, date: new Date("2021-03-07T22:00:00") }]);
    expect(fare).toBe(50);
});

test("Não deve calcular uma corrida com distância invalida", function(){
   expect(() => calculateRideV2([{ distance: -10, date: new Date("2021-03-07T22:00:00") }])).toThrow(new Error("Invalid Distance"));
});

test("Não deve calcular uma corrida com data invalida", function(){
    expect( () => calculateRideV2([{ distance: 10, date: new Date("javascript") }])).toThrow(new Error("Invalid Date"));
});

test("Deve calcular uma corrida em hórario normal com valor minimo", function(){
    const fare = calculateRideV2([{ distance: 3, date: new Date("2021-03-10T10:00:00") }]);
    expect(fare).toBe(10);
});