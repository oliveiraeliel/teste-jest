const functions = require('./functions');

//testes da função do primeiro grau

//y = ax + b
test('Teste função primeiro grau 1', () => {
    expect(functions.solucaoPrimeiroGrau(-1, 4)).toBe(4);
})
test('Teste função primeiro grau 2', () => {
    expect(functions.solucaoPrimeiroGrau(-1, 0)).toBe(0);
})
test('Teste função primeiro grau 3 (falha)', () => {
    expect(functions.solucaoPrimeiroGrau(9, 3.5)).toBe(-3.5 / 2);
})
test('Teste função primeiro grau 4 (falha)', () => {
    expect(functions.solucaoPrimeiroGrau(-10, 6)).toBe(-0.6);
})
test('Teste função primeiro grau 5', () => {
    expect(functions.solucaoPrimeiroGrau(-1, -5.5)).toBe(-5.5);
})
test('Teste função primeiro grau: a=0', () => {
    expect(functions.solucaoPrimeiroGrau(0, 4)).toBe('erro');
})

//testes da função do segundo grau

//y = ax² + bx + c
test('Teste função do segundo grau 1', () => {
    const result = functions.solucaoSegundoGrau(1, -1, 6);
    expect(result.x1).toBe('delta negativo')
    expect(result.x2).toBe('delta negativo')
})
test('Teste função do segundo grau 2 (falha)', () => {
    const result = functions.solucaoSegundoGrau(1, 3, 9);
    expect(result.x1).toBe(1)
    expect(result.x2).toBe(-5)
})
test('Teste função do segundo grau 3', () => {
    const result = functions.solucaoSegundoGrau(1, 5, 6);
    expect(result.x1).toBe(-2)
    expect(result.x2).toBe(-3)
})
test('Teste função do segundo grau 4', () => {
    const result = functions.solucaoSegundoGrau(1, 1, 0);
    expect(result.x1).toBe(0)
    expect(result.x2).toBe(-1)
})
test('Teste função do segundo grau 5', () => {
    const result = functions.solucaoSegundoGrau(1, 0, -9);
    expect(result.x1).toBe(3)
    expect(result.x2).toBe(-3)
})
test('Teste função do segundo grau: a=0 (falha)', () => {
    const result = functions.solucaoSegundoGrau(0, -1, 6);
    expect(result.x1).toBe(1)
    expect(result.x2).toBe(-1)
})
