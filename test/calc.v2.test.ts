import { calc } from "../src/calc.v1";

test("deve calcular uma corrida em hórario normal", function(){
    const fare = calc([{ dist: 10, ds: new Date("2021-03-10T10:00:00") }]);
    expect(fare).toBe(21);
});