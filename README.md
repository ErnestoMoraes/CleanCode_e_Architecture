# cleancodeearchitecture

## Resultados Esperados
 - [ ] Ter um olhar mais critico e profissional em relação ao desenvolvimento de software, elevando seu nivel de maturidade e buscando sempre criar um mabiente de qualidade.

 - [ ] Saber aplicar diversas tecnicas de clean code e refactoring com o objetivo de tornar o codigo mais limpoo e compreensivel.

 - [ ] Entender como desenvolver utilizando Test-Driven Development.

 - [ ] Dominar os principios da Programação Orientada a Objetos.

 - [ ] saber como estruturar a arquitetura da sua aplicação utilizando Clean Architecture e Domin-Drive Design.

 - [ ] Conhecer vários Design Patterns e entenda como eles podem ajudar a criar código mais desacoplado e manutenível.

 - [ ] Aplicar os SOLID principles na prática.

 - [ ] Entender aonde faz sentido aplicar Event Sourcing e CQRS.

 - [ ] Se tornar uma pessoa muito mais confiante no dia a dia de trabalho, discussões técnicas, entrevistas de emprego e em outras situação onde seja necessário discutir sobre arquitetura de software.

## Conceitos Aplicados

 - O que é OO?
 - Design x Artquitetura.
 - Reconhecer e Indentificar Code Smells
 - Design Patterns: Strategy, Factory e Chain of Responsability.
 - O que é um teste automatizado?
 - 3 leis do TDD.

### Como rodar os testes automatizados:

```
npx jest --coverage
npx jest --watchAll
```

### 1° Projeto de Atividade: Validação de CPF
Os testes cobrem 93.33% do código.

### Comando para iniciar um projeto TS:
```
yarn init -y
yarn add typescript jest ts-node ts-jest nodemon
npx tsc --init
npx ts-jest config:init
```
 - criar pasta "src" e "test".

 ## Aula 03
 - [ ] Porta and Adapters / Hexagonal
 - [ ] Tests Patterns

 ### Rodar SQL
 - Verificar a tulização do PSQL
 - Instalação e Debugação

 ### Rodar o Express
 - ```npx ts-node src/aula03/main.ts```
 - Executando o Express de forma aitva: (Direto)
 - ```npx nodemon src/aula03/main.ts```
 
 ### Teste Feitos
 - Dummy
 - Stub
 - Mock
 - Spy
 - Fake
 