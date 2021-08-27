// function solucaoPrimeiroGrau(a, b) {
//     if (a == 0) break;
//     // let result = { x: -b / a };
//     return result;
// }
// function solucaoSegundoGrau(a, b, c) {
//     if (a == 0) break;
//     var soma = -b / a;
//     var produto = c / a;
//     var x1, x2;
//     if (x1 + x2 == soma && x1 * x2 == produto) {
//         let result = { x1: x1, x2: x2 };
//         return result;
//     }
// }
const functions = {
    solucaoPrimeiroGrau: (a, b) => -b/a
    // solucaoSegundoGrau: (a, b, c) => 
}
module.exports = functions;
// if (a == 0) return 'a não pode ser igual à 0'