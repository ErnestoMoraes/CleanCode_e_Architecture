import { validate } from "../../src/CPF/validate";

test("Deve validar o cpf", function(){
    const isValid = validate('259.556.978-37');
    expect(isValid).toBeTruthy();
});