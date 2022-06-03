// Logical AND (&&)

const currentHour = 7;

let message = '';

if (currentHour >= 22) {
  console.log(message = 'Não deveríamos comer nada, é hora de dormir');
} else if (currentHour < 22 && currentHour >= 18) {
  console.log(message = 'Rango da noite, vamos jantar :D');
} else if (currentHour < 18 && currentHour >= 14) {
  console.log(message = 'Vamos fazer um bolo pro café da tarde?');
} else if (currentHour < 14 && currentHour >= 11) {
  console.log(message = 'Hora do almoço!!!');
} else if (currentHour < 11 && currentHour >= 4) {
  console.log(message = 'Hmmm, cheiro de café recém-passado');
}

console.log(message);

// Logical OR (||)

let weekDay = 'quarta-feira';

if (weekDay === 'segunda-feira' || weekDay === 'terça-feira' || weekDay === 'quarta-feira' || weekDay === 'quinta-feira' || weekDay === 'sexta-feira') {
  console.log('Oba, mais um dia de aprendizado na Trybe >:D');
} else {
  console.log('FINALMENTE, descanso merecido UwU');
}

// Logical NOT (!)

console.log((2 + 2) === 4);

console.log(!(2 + 2) === 4);
