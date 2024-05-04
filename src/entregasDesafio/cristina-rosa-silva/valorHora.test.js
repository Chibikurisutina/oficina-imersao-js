// desbribe nome da funcao ou classe que estamos testando
// test: funcao que realiza o nosso teste

const modulo = require ("../../dominio/calculadora/Hora/valorHora")
// 1 parametro O que?
describe('calcularValorPorHora',() => {
    test('Deve retorna dado o salário 1412 retornada 6,42 por hora', () => {
        const rendaMensal = 1412
    // pula
        const resultado = modulo.calcularValorPorHora(rendaMensal)
    //pula
        expect(resultado).toEqual(9)
    })
})

describe('calcularValorPorHora',() => {
    test('o que o teste está testando', () => {})
});