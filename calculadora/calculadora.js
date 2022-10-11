/*
1. Criar um arquivo calculadora.js, em que devemos importar os quatro arquivos feitos
anteriormente.
*/

// importar soma
import { somar } from "./somar.js";
import { subtrair } from "./subtrair.js";
import { multiplicar } from "./multiplicar.js";
import { dividir } from "./dividir.js";

const sum  = somar(20, 5);
const sub  = subtrair(20, 5);
const mult = multiplicar(20, 0);
const div  = dividir(20, 0);

console.log('Soma:', sum);
console.log('Subtração:', sub);
console.log('Multiplicação:', mult);
console.log('Divisão:', div);
