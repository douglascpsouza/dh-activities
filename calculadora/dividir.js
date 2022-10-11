/*
5. Criar um arquivo dividir.js que contenha uma função chamada dividir, a qual deve ser
exportada ao final do arquivo. Esta função deve receber 2 parâmetros e retornar a
divisão dos mesmos. Importante:
a. Contemplar o cenário em que se algum dos dois parâmetros é zero, a função
retornará "Não se pode dividir por zero".
*/

export function dividir(numA, numB) {
    if (numB === 0) {
        console.log('Não se pode dividir por zero');
        return NaN;
    }
    return numA / numB;
}
