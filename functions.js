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
    solucaoPrimeiroGrau: (a, b) => a != 0 ? -b / a : 'erro',
    solucaoSegundoGrau: (a, b, c) => {
        var x1, x2;
        var raizes = {};
        const delta = b * b - 4 * a * c;
        if (a == 0)
            return raizes = { x1: 'erro', x2: 'erro' };
        else
            if (delta == 0) {
                x1 = (-b) / (2 * a);
                x2 = x1;
                return raizes = { x1: x1, x2: x2 };
            } else if (delta > 0) {
                x1 = -b + Math.sqrt(delta) / (2 * a);
                x2 = -b - Math.sqrt(delta) / (2 * a);
                return raizes = { x1: x1, x2: x2 };
            } else {
                x1 = 'delta negativo';
                x2 = x1;
                return raizes = { x1: x1, x2: x2 };
            }
    }
}
module.exports = functions;
