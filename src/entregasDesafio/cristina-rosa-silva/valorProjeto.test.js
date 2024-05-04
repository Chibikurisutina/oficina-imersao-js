const {calcularValorTotalProjeto} = require("../../dominio/calculadora/Projeto/valorProjeto")
const moduloPacote = require("../../dominio/calculadora/Projeto/pacote")
const { calcularHorasDeProjeto } = require("../../dominio/calculadora/Projeto/horasPorProjeto")

jest.mock("../../dominio/calculadora/Projeto/pacote.js")

describe("valorProjeto", () => {
    beforeAll(() => {
        moduloPacote.calcularPacote.mockReturnValue('pacote_intermediario')
    })
  
   // test("apenas uma funionalidade com mock de pacote_basico", () => {
   //
   //      const resultado = calcularValorTotalProjeto(["ssr"],8)
   //      console.log(resultado)
   //})

    test("calcular valorTotalDoProjeto com duas funcionalidades e mock pacote_intermediário", () => {
        const resultado = calcularValorTotalProjeto(["ssr","formulario"],24)
        console.log(resultado)
    })
})