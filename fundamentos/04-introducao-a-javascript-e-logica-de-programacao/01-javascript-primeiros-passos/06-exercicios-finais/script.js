// 01

const a = 4;
const b = 2;

let addition = a + b;
console.log('Adição: ' + addition);

let subtraction = a - b;
console.log('Subtração: ' + subtraction);

let multiplication = a * b;
console.log('Multiplicação: ' + multiplication);

let division = a / b;
console.log('Divisão: ' + division);

let remainder = a % b;
console.log('Módulo: ' + remainder);

// 02

const c = 5;
const d = 10;

if (c > d) {
  console.log('Número maior: ' + c);
} else {
  console.log('Número maior: ' + d);
}

// 03

const e = 13;
const f = 12;
const g = 11;

if (e > f && e > g) {
  console.log('Número maior: ' + e);
} else if (f > e && f > g) {
  console.log('Número maior: ' + f);
} else {
  console.log('Número maior: ' + g);
}

// 04

const h = -3;

if (h > 0) {
  console.log('positive');
} else if (h < 0) {
  console.log('negative');
} else {
  console.log('zero');
}

// 05

const firstAngle = 45;
const secondAngle = 45;
const thirdAngle = 90;

let sumOfAngles = firstAngle + secondAngle + thirdAngle;
let validAngles = firstAngle > 0 && secondAngle > 0 && thirdAngle > 0;

if (validAngles) {
  if (sumOfAngles === 180) {
    console.log(true);
  } else {
    console.log(false);
  }
} else {
  console.log('invalid angle');
}

// 06

let chessPiece = 'pawn';

switch (chessPiece.toLowerCase()) {
  case 'pawn':
    console.log('pawn -> vertically forward one square');
    break;
  case 'rook':
    console.log('rook -> vertically or horizontally');
    break;
  case 'knight':
    console.log('knight -> in a L shape');
    break;
  case 'bishop':
    console.log('bishop -> diagonally');
    break;
  case 'queen':
    console.log('queen -> all directions');
    break;
  case 'king':
    console.log('king -> all directions one square');
    break;
  default:
    console.log('invalid piece');
}

// 07

const grade = 92;

if (grade < 0 || grade > 100) {
  console.log('Invalid grade');
} else if (grade >= 90) {
  console.log('A');
} else if (grade >= 80) {
  console.log('B');
} else if (grade >= 70) {
  console.log('C');
} else if (grade >= 60) {
  console.log('D');
} else if (grade >= 50) {
  console.log('E');
} else {
  console.log('F');
}

// 08

const i = 15;
const j = 20;
const k = 25;

if (i % 2 === 0 || j % 2 === 0 || k % 2 === 0) {
  console.log(true);
} else {
  console.log(false);
}

// 09

const l = 1;
const m = 2;
const n = 3;

if (l % 2 !== 0 || m % 2 !== 0 || n % 2 !== 0) {
  console.log(true);
} else {
  console.log(false);
}

// 10

const valorCusto = 500;
const valorVenda = 1200;

let impostoSobreCusto = valorCusto * 0.2;
let valorCustoTotal = valorCusto + impostoSobreCusto;
let lucro = valorVenda - valorCustoTotal;
let lucroTotal = lucro * 1000;

if (valorCusto < 0 || valorVenda < 0) {
  console.log('Valor inválido');
} else {
  console.log(lucroTotal);
}

// 11

const salarioBruto = 3000;

let salarioBase;
let salarioLiquido;

if (salarioBruto <= 1556.94) {
  salarioBase = salarioBruto - (salarioBruto * 0.08);
} else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
  salarioBase = salarioBruto - (salarioBruto * 0.09);
} else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
  salarioBase = salarioBruto - (salarioBruto * 0.11);
} else {
  salarioBase = salarioBruto - 570.88;
}

if (salarioBase <= 1903.98) {
  salarioLiquido = salarioBase;
} else if (salarioBase > 1903.98 && salarioBase <= 2826.65) {
  salarioLiquido = salarioBase - (salarioBase *0.075 - 142.8);
} else if (salarioBase > 2826.65 && salarioBase <= 3751.05) {
  salarioLiquido = salarioBase - (salarioBase *0.15 - 354.8);
} else if (salarioBase > 3751.05 && salarioBase <= 4664.68) {
  salarioLiquido = salarioBase - (salarioBase *0.225 - 636.13);
} else {
  salarioLiquido = salarioBase - (salarioBase *0.275 - 869.36);
}

console.log('Salário líquido: ' + salarioLiquido);
