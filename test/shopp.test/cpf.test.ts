import Cpf from "../../src/project.shopp/Cpf";

test.skip("Deve validar o cpf válido que tem o dígito maior do que zero", function(){
    const cpf = new Cpf('259.556.978-37');
    expect(cpf).toBeDefined();
});

test.skip("Deve validar o cpf com digito zero no primeiro digito", function(){
    const cpf = new Cpf('198.454.187-08');
    expect(cpf).toBeDefined();
});

test.skip("Deve validar o cpf com digito zero no segundo digito", function(){
    const cpf = new Cpf('147.085.437-60');
    expect(cpf).toBeDefined();
});

test.skip("Deve tentar validar o cpf com mais de 14 caracteres", function(){
    expect(() => new Cpf('147.085.437-600')).toThrow(new Error("Cpf inválido"));
});

test.skip("Deve validar o cpf com todos os digitos iguais", function(){
    expect(() => new Cpf('111.111.111-11')).toThrow(new Error("Cpf inválido"));
});

test.skip("Deve validar o cpf com letras", function(){
    expect(() => new Cpf("abc")).toThrow(new Error("Cpf inválido"));
});