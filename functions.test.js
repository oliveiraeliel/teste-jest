const functions = require('./functions');

// test('Verificar funções', () => {
//     expect(functions.solucaoPrimeiroGrau(-1,4)).toBe(-1);
// })

test('Verificar funções2', () => {
    const resultado = functions.solucaoSegundoGrau(0, 1, -4)
    expect(resultado.x1).toBe('erro')
    expect(resultado.x2).toBe('erro')
})