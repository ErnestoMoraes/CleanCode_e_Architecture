import { calc } from "../../src/aula01/calc.v1";

test.skip("Deve calcular uma corrida em hórario normal", function(){
    const fare = calc([{ dist: 10, ds: new Date("2021-03-10T10:00:00") }]);
    expect(fare).toBe(21);
});

test.skip("Deve calcular uma corrida em hórario noturno", function(){
    const fare = calc([{ dist: 10, ds: new Date("2021-03-10T22:00:00") }]);
    expect(fare).toBe(39);
});

test.skip("Deve calcular uma corrida em hórario no domingo", function(){
    const fare = calc([{ dist: 10, ds: new Date("2021-03-07T10:00:00") }]);
    expect(fare).toBe(29);
});

test.skip("Deve calcular uma corrida em hórario no domingo noturno", function(){
    const fare = calc([{ dist: 10, ds: new Date("2021-03-07T22:00:00") }]);
    expect(fare).toBe(50);
});

test.skip("Não deve calcular uma corrida com distância invalida", function(){
    const fare = calc([{ dist: -10, ds: new Date("2021-03-07T22:00:00") }]);
    expect(fare).toBe(-1);
});

test.skip("Não deve calcular uma corrida com data invalida", function(){
    const fare = calc([{ dist: 10, ds: new Date("javascript") }]);
    expect(fare).toBe(-2);
});

test.skip("Deve calcular uma corrida em hórario normal com valor minimo", function(){
    const fare = calc([{ dist: 3, ds: new Date("2021-03-10T10:00:00") }]);
    expect(fare).toBe(10);
});