import { validate } from "../../src/CPF/validate";

test("Deve validar o cpf válido que tem o dígito maior do que zero", function(){
    const isValid = validate('259.556.978-37');
    expect(isValid).toBeTruthy();
});

test("Deve validar o cpf com digito zero no primeiro digito", function(){
    const isValid = validate('198.454.187-08');
    expect(isValid).toBeTruthy();
});

test("Deve validar o cpf com digito zero no segundo digito", function(){
    const isValid = validate('147.085.437-60');
    expect(isValid).toBeTruthy();
});

test("Deve tentar validar o cpf com mais de 14 caracteres", function(){
    const isValid = validate('147.085.437-600');
    expect(isValid).toBeFalsy();
});

test("Deve validar o cpf com todos os digitos iguais", function(){
    const isValid = validate('111.111.111-11');
    expect(isValid).toBeFalsy();
});

test("Deve validar o cpf com letras", function(){
    const isValid = validate("abc");
    expect(isValid).toBeFalsy();
});