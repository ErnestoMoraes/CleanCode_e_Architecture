# Estudos sobre Clean Code
Curso ministrado por Rodrigo Branas.

## Resultados Esperados
 - [x] Ter um olhar mais critico e profissional em relação ao desenvolvimento de software, elevando seu nivel de maturidade e buscando sempre criar um mabiente de qualidade.

- [x] Saber aplicar diversas tecnicas de clean code e refactoring com o objetivo de tornar o codigo mais limpoo e compreensivel.

- [x] Entender como desenvolver utilizando Test-Driven Development.

- [x] Dominar os principios da Programação Orientada a Objetos.

- [x] saber como estruturar a arquitetura da sua aplicação utilizando Clean Architecture e Domin-Drive Design.

- [x] Conhecer vários Design Patterns e entenda como eles podem ajudar a criar código mais desacoplado e manutenível.

- [x] Aplicar os SOLID principles na prática.

- [x] Entender aonde faz sentido aplicar Event Sourcing e CQRS.

- [x] Se tornar uma pessoa muito mais confiante no dia a dia de trabalho, discussões técnicas, entrevistas de emprego e em outras situação onde seja necessário discutir sobre arquitetura de software.

## Conceitos Aprendidos ao longo do curso:

 - O que é OO?
 - Design x Artquitetura.
 - Reconhecer e Indentificar Code Smells
 - Design Patterns: Strategy, Factory e Chain of Responsability.
 - O que é um teste automatizado?
 - quais são as 3 leis do TDD.
 - Porta and Adapters / Hexagonal
 - Tests Patterns
  - Teste feitos:
   - Dummy
   - Stub
   - Mock
   - Spy

## Como rodar os testes automatizados contidos nos projetos:

```
npx jest --coverage
npx jest --watchAll
```

## 1° Projeto: Validação de CPF
Um numero de CPF é inserido e o sistema testa se é válido ou não.

### Comando para iniciar um projeto TS:
```
yarn init -y
yarn add typescript jest ts-node ts-jest nodemon
npx tsc --init
npx ts-jest config:init
```
