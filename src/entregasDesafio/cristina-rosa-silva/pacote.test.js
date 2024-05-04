const {calcularPacote} = require("../../dominio/calculadora/Projeto/pacote");
describe('pacote', ( )=> {
    test("Deve retornar pacote pacote_basico quando totalHorasPorProjeto for menor que 50", () => {
        const totalDeHorasPorProjeto = 49
        const result = calcularPacote(totalDeHorasPorProjeto)
        expect(result).toEqual("pacote_basico")
    })

    test("Deve retornar qual o pacote quando totalHorasPorProjeto for igual a 50", () => {
        const totalDeHorasPorProjeto = 50
        const result = calcularPacote(totalDeHorasPorProjeto)
        expect(result).toEqual("pacote_basico")
        // pacote_basico deveria incluir 50. poderia altera constante para 50.1 para obter o resultado esperado?
    })

    test("Deve retornar qual o pacote quando totalHorasPorProjeto for maior que 100", () => {
        const totalDeHorasPorProjeto = 101
        const result = calcularPacote(totalDeHorasPorProjeto)
        expect(result).toEqual("pacote_premium")
        // pacote_basico deveria incluir 50. poderia altera constante para 50.1 para obter o resultado esperado?
    })
})